import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isonTalentPage = nextUrl.pathname.startsWith('/talent');
      const isOnLoginPage = nextUrl.pathname.startsWith('/login');
      const isOnHomePage = nextUrl.pathname.startsWith('/home');

      if (isonTalentPage) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isOnLoginPage) {
        {
          if (isLoggedIn) {
            return Response.redirect(new URL('/home', nextUrl));
          }
        }
      } else if (isOnHomePage) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
