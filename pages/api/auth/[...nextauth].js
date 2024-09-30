import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"

import { verifyPassword } from '@/lib/auth';
import connectMongoDB from "@/lib/mongoDB";
import Users from "@/models/users";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectMongoDB();
        const user = await Users.findOne({ email: credentials.email });
        console.log("Users",user);

        // const usersCollection = client.db().collection('users');

        // const user = await usersCollection.findOne({
        //   email: credentials.email,
        // });

        if (!user) {
          console.log("No User!!");
         
          throw new Error('No user found!');
          
        }

          console.log("Is vAlid check");
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        console.log("Isvalid",isValid);

        if (!isValid) {
          console.log("Not vaids User!!");
          
          throw new Error('Could not log you in!');
          
        }

        console.log("Return User kkkk");
        return { email: user.email,username:user.fullname,id:user._id };
        
      },
    }),
  ],
  callbacks:{
    jwt: async ({ token, user }) =>{

      if (user) {
        token.uid = user;
      }

      return token
    },
    session: async ({ session, token }) => {

      console.log("Token",token);
        // here we put session.useData and put inside it whatever you want to be in the session
        // here try to console.log(token) and see what it will have 
        // sometimes the user get stored in token.uid.userData
        // sometimes the user data get stored in just token.uid
        session.userData = {
          
          
          username:token.uid.username,
          email:token.uid.email,
          id:token.uid.id,
         
        }

      console.log("Session Data",session);

      return session;
    },
  },

});
