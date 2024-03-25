import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';


const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'email',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials: any) {
            
            return {
                id: "user1",
                name:"leander",
                email:"leanderdsilva06@gmail.com"
            };
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export const GET = handler;
export const POST = handler;