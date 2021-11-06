import axios from "axios";
import { Db } from "mongodb";
import NextAuth from "next-auth";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import clientPromise from "../../../lib/database";

export default async function auth(req, res) {
  const db = await clientPromise,
    instance: Db = db.db("Ryft-Auth")

  return await NextAuth(req, res, {
    providers: [
      {
        id: "discord",
        name: "Discord",
        type: "oauth",
        authorization: "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds",
        token: "https://discord.com/api/oauth2/token",
        userinfo: "https://discord.com/api/users/@me",
        async profile(profile, tokens) {
          if (profile.avatar === null) {
            const defaultAvatarNumber = parseInt(profile.discriminator) % 5
            profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
          } else {
            const format = profile.avatar.startsWith("a_") ? "gif" : "png"
            profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
          }

          const { data: guilds } = await axios('https://discord.com/api/users/@me/guilds', {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`
            }
          });

          return {
            ...profile,
            guilds
          };
        },
        clientId: process.env.DISCORD_ID,
        clientSecret: process.env.DISCORD_SECRET
      }
    ],
    pages: {
      signIn: "/dashboard",
      error: "/auth/error"
    },
    adapter: MongoDBAdapter({
      db: instance
    })
  })
}