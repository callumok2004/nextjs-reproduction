//@ts-nocheck

import axios from "axios";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import db from "../database";

export default NextAuth({
    providers: [
        Providers.Discord({
            clientId: process.env.DISCORD_ID,
            clientSecret: process.env.DISCORD_SECRET,
            scope: "guilds"
        })
    ],
    callbacks: {
        jwt: async (token, user, account, profile, isNewUser) => {
            if (profile) {
                const guilds = await axios('https://discord.com/api/users/@me/guilds', {
                    headers: {
                        Authorization: `Bearer ${account.accessToken}`
                    }
                });

                await (await db('RyftSite', 'Users')).findOneAndUpdate(
                    { userId: profile.id },
                    { $set: { ...profile, guilds: guilds.data, account } },
                    { upsert: true }
                );
            }
            user && (token.user = user);
            return Promise.resolve(token);
        },
        session: async (session, user, sessionToken) => {
            const userr = await (await db('RyftSite', 'Users')).findOne({ userId: user.user.id });
            session.user = userr || user.user;
            return Promise.resolve(session);
        },
        redirect: async (url, baseUrl) => Promise.resolve('/dashboard')
    },
    pages: {
        signIn: "/dashboard",
        error: "/auth/error"
    }
})