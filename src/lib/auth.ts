import NextAuth, { type DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import User from "./models"; // Kullanıcı modelini içe aktarın
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./db";
import { connectToDb } from "./connectToDb";

declare module "next-auth" {
  interface Session {
    user: {
      address: string;
      role: string; // Kullanıcının rolünü oturum verisine ekleyin
    } & DefaultSession["user"];
  }
}

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    } as any),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      await connectToDb();
      // Kullanıcıyı veritabanından bulun ve rolünü ekleyin
      const user = await User.findOne({ email: session.user.email });
      if (user) {
        session.user.role = user.role;
      }
      return session;
    },
    async signIn({ user }) {
      await connectToDb();
      // Kullanıcı veritabanında mevcut mu kontrol edin, yoksa oluşturun
      const existingUser = await User.findOne({ email: user.email });
      if (!existingUser) {
        await User.create({ email: user.email, name: user.name });
      }
      return true;
    },
  },
  pages: {
    signIn: "/profile",
  },
});
