import { prismaInstance } from '../src/lib/prisma-instance.js';

import { banks } from '../data/banks.js';

function seedData() {
  return prismaInstance.bank.createMany({
    data: banks,
    skipDuplicates: true,
  });
}

seedData()
  .then(() => {
    console.log('Data seeded successfully!');
  })
  .catch((error) => {
    console.error('Error seeding data:', error);
  })
  .finally(async () => {
    await prismaInstance.$disconnect();
  });
