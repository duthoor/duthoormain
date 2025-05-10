import 'dotenv/config';
import session from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { prismaInstance } from '../lib/prisma-instance.js';
import { getEnv } from '../config/safe-env.js';

export function getSessionMiddleware() {
  return session({
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
    },

    secret: String(getEnv('SESSION_SECRET')),
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(prismaInstance, {
      checkPeriod: 2 * 60 * 1000, // ms - how often to check for expired sessions (in this case every 2 minutes)
    }),
  });
}
