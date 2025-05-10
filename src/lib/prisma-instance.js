import { PrismaClient } from '../generated/prisma/index.js';

export const prismaInstance = new PrismaClient({
  log: ['info', 'error'],
});
