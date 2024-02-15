import { connectToDB } from "@/utils/db";
import nextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handler = nextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  async session({ session }) {
      
  },

  async signIn({ profile }) {
      try {
        await connectToDB();

        
      } catch (error) {
        
      }
  }
});

export { handler as GET, handler as POST };
