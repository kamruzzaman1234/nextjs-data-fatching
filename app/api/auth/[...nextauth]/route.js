import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    secret: process.env.NEXTAUTH_SECRET,
    session:{
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },

    providers: [
        CredentialsProvider({
            credentials: {

                email: {label: "email", type:"text", required: true, placeholder: "Enter Your email"},
                password: {label: "password", type: "password", required: true, placeholder: "Enter Your Password"},
                
            },
                async authorize (credentials){

                const {email, password} = credentials;
                if(!credentials){
                    return null
                }
                if(email){
                    const currentUser = users.find((user)=> user.email === email)
                    console.log(currentUser)
                    if(currentUser){
                        if(currentUser.password === password){
                            return currentUser
                        }
                    }
                }

                return null
                
            }
        })
    ],

    callback: {
        async jwt({ token, account, user}){
            if(account){
                token.type = user.type
                token.id = profile.id
            }
            return token
        },
        async session({session, token}){
            session.user.type = token.type
            return session
        }
    },
}

const handler = NextAuth(authOption)

const users = [
    {
        id:1,
        name: "labib",
        email:"labib@gmail.com",
        password: "labib1"
    },
    {
        id:2,
        name:'hasan',
        email:'hasan@gmail.com',
        password: "hasan1"
    }
]

export {handler as GET, handler as POST };
