import { logIn } from "services/auth"
import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(999999, credentials);
                if (typeof credentials !== "undefined") {
                    const res = await logIn({ email: credentials.email, password: credentials.password })
                    if (typeof res !== "undefined") {
                        return { ...res.user, apiToken: res.token }
                    } else {
                        return null
                    }
                } else {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: '/chat/login'
    },
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }