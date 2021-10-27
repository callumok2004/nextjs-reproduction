import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
    providers: [
        Providers.Discord({
            clientId: process.env.DISCORD_ID,
            clientSecret: process.env.DISCORD_SECRET,
            scope: ["guilds", "email"]
        })
    ],
    callbacks: {
        jwt: async (token, user) => {
            user && (token.user = user);
            return Promise.resolve(token);
        },
        session: async (session: any, user) => {
            session.user = user.user;
            return Promise.resolve(session);
        }
    },
    pages: {
        signIn: "/dashboard",
        error: "/auth/error"
    }
})