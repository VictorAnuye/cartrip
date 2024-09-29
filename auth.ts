import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import GoogleProvider from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter"; 
import GitHub from "next-auth/providers/github";

export const { handlers,auth,signIn,signOut } = NextAuth({
    ...authConfig,
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        Twitter({
            clientId:process.env.TWITTER_CLIENT_ID,
            clientSecret:process.env.TWITTER_CLIENT_SECRET
        }),
        GitHub({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET
        }),
    ],
});