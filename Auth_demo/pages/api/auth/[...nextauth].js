import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import EmailProvider from 'next-auth/providers/email'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
      
      AppleProvider({
        clientId: process.env.APPLE_ID,
        clientSecret: process.env.APPLE_SECRET
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
      EmailProvider({
        server: process.env.MAIL_SERVER,
        from: 'NextAuth.js <no-reply@example.com>'
      }),
    ],

  database: process.env.DB_URL,
  session: {
    jwt: true
  },
  jwt: {
    secret: 'Vinu@2020'
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id,
        token.test=user.name
      }
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      session.user.test = token.test
      return session
    }
  }
    
})