import { prisma } from '@repo/db';

export default async function Home() {
  const user = await prisma.user.findFirst();

  return (
    <div>
      <h1>{user?.name}</h1>
      <h2>{user?.email}</h2>
    </div>
  );
}
