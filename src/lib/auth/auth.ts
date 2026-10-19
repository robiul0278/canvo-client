import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" && user?.email && user?.name && user?.id) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/auth/sync`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              googleId: user.id,
              email: user.email,
              name: user.name,
              avatar: user.image || "",
            }),
          });
          if (!res.ok) {
            console.error("Auth sync failed:", res.status);
            return false;
          }
          // Store backend user data (id, role) in token via JWT callback
          const userData = await res.json();
          (user as any).dbId = userData.id || userData._id || user.id;
          (user as any).dbRole = userData.role || "user";
        } catch (err) {
          console.error("Auth sync error:", err);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = (user as any).dbId || user.id || "";
        token.email = user.email || "";
        token.name = user.name || "";
        token.role = (user as any).dbRole || "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).id = (token as any).id as string;
        session.user.email = (token as any).email as string;
        (session.user as any).role = (token as any).role || "user";
      }
      return session;
    },
  },
};
