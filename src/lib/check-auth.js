import { prismaInstance } from './prisma-instance.js';

/**
 * Check if the user is authenticated for the given request.
 * @typedef {{user: import("../generated/prisma/index.js").User, success: true}} AuthenticatedUser
 * @typedef {{success: false}} UnauthenticatedUser
 *
 * @param {import('express').Request} request - The request object from Express.
 * @param {import("../generated/prisma/index.js").Role | "BOTH"} role - The role to check against.
 * @returns {Promise<AuthenticatedUser | UnauthenticatedUser>} - The authenticated user or null if not authenticated.
 */
export async function checkAuth(request, role) {
  const userId = request.session.userId;

  if (!userId) {
    return { success: false };
  }

  const user = await prismaInstance.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return { success: false };
  }

  if (role === 'BOTH') {
    return { user, success: true };
  }

  if (user.role !== role) {
    return { success: false };
  }

  return { user, success: true };
}
