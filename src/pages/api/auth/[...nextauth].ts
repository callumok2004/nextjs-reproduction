//@ts-nocheck

import axios from "axios";
import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import clientPromise from "../../../lib/database";

export default async function auth(req, res) {
    const db = await clientPromise;

    console.log(db.db)

    return await NextAuth(req, res, {
        providers: [
            Discord({
                clientId: process.env.DISCORD_ID,
                clientSecret: process.env.DISCORD_SECRET,
                scope: "guilds"
            })
        ],
        adapter: MongoDBAdapter({
            db: db.db("Ryft-Auth")
        }),
        pages: {
            signIn: "/dashboard",
            error: "/auth/error"
        }
    })
}