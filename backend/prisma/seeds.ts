import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.users.create({
    data: {
      username: 'jhonDoee',
      password: 'e64b78fc3bc91bcbc7dc232ba8ec59e0', //MD5 hash: Admin123
      
      account: {
        create: {
          balance: 100,
        }
      }
    },
  });

  await prisma.users.create({
    data: {
      username: 'henriqueMartins',
      password: 'b59430d4f46de9bdab0c82d95d247438', //MD5 hash: Cozinhar123
      
      account: {
        create: {
          balance: 100,
        }
      }
    },
  });

  await prisma.users.create({
    data: {
      username: 'vitoriaSilva',
      password: '67e4aef40787dfe555d0a2b399470e51', //MD5 hash: Manicure001
      
      account: {
        create: {
          balance: 100,
        }
      }
    },
  });
}

main();
