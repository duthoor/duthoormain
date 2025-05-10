import { prismaInstance } from '../lib/prisma-instance.js';

/**@param {string} userId  */
export function getMyProfile(userId) {
  return prismaInstance.user.findUnique({
    where: { id: userId },
    select: {
      name: true,
      email: true,
      phone: true,
      createdAt: true,
      role: true,
    },
  });
}
