import bcrypt from 'bcrypt';
import inquirer from 'inquirer';
import { prismaInstance } from '../src/lib/prisma-instance.js';

async function getUserInput() {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'name', message: 'Enter your name:' },
    { type: 'input', name: 'email', message: 'Enter email:' },
    { type: 'input', name: 'cnic', message: 'Enter your id number' },
    {
      type: 'password',
      name: 'password',
      message: 'Enter password:',
      mask: '*',
    },
    {
      type: 'password',
      name: 'confirmPassword',
      message: 'Confirm password:',
      mask: '*',
    },
  ]);

  if (answers.password !== answers.confirmPassword) {
    console.log('⚠ Passwords do not match. Please try again.');
    return;
  }

  const hashedPassword = await bcrypt.hash(answers.password, 10);

  console.log('🔁 Creating admin...');

  const user = await prismaInstance.user.create({
    data: {
      name: answers.name,
      email: answers.email,
      password: hashedPassword,
      cnic: answers.cnic,
      role: 'ADMIN',
    },
  });

  return user.id;
}

getUserInput()
  .then((userId) => {
    if (userId) {
      console.log(`✨ Admin user created with ID: ${userId}`);
    }
  })
  .catch((error) => {
    console.error('An error occurred while creating the admin user:', error);
  })
  .finally(() => {
    console.log('🔚 Exiting...');
    prismaInstance.$disconnect().catch((error) => {
      console.error('Error disconnecting from Prisma:', error);
    });
    process.exit();
  });
