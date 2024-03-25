import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


export const auth ={
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
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID || " ",
            clientSecret: process.env.GITHUB_SECRET || ""
          })
      ],
      secret: process.env.NEXTAUTH_SECRET,
      callbacks:{
        session:({session,token,user}: any ) =>{
          session.user.id = token.sub
          return session
        }
      },
      pages:{
            signIn:"/signIn"
      }
    }