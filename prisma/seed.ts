import { hashPassword } from "@/lib/auth";
import { db } from "@/lib/db";

async function run() {
  const promises = new Array(5).fill(1).map(async (_, i) => {
    const email = `user${i}@email.com`;
    return db.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        password: await hashPassword(`password${i}`),
        posts: {
          create: new Array(5).fill(1).map((_, i) => ({
            title: `Post ${i}`,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
          })),
        },
      },
      include: {
        posts: true,
      },
    });
  });

  const users = await Promise.all(promises);

  console.log({ users });
}

run()
  .then(() => {
    db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
