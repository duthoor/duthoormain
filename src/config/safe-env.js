import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  PORT: z.string().optional().default('8000'),
  CLIENT_URL: z.string(),

  DATABASE_URL: z.string().url(),

  EMAIL_USER: z.string(),
  EMAIL_FROM: z.string(),
  EMAIL_PASSWORD: z.string(),
  EMAIL_PORT: z.string(),
  EMAIL_HOST: z.string(),

  SESSION_SECRET: z.string().min(10, 'SESSION_SECRET must be at least 10 characters long'),
});

// Validate process.env against the schema
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  const errors = parsedEnv.error.errors.map((error) => `${error.path}: ${error.message}`).join('\n');
  console.error('❌ Invalid environment variables', errors);
  process.exit(1);
}

/**
 * Returns a validated environment variable by key.
 * @typedef {z.infer<typeof envSchema>} Env
 * @param {keyof Env} key - The key of the environment variable to retrieve.
 * @returns {Env[key]} The value of the environment variable.
 */
export function getEnv(key) {
  if (!parsedEnv.success) {
    throw new Error('Environment variables have not been validated yet.');
  }
  return parsedEnv.data[key];
}
