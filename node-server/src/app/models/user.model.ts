import { prisma } from "../../config/db.js";

export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });
};

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      createdAt: true,
    },
  });
};

export const findOrCreateGitHubUser = async (profile: any) => {
  const existingUser = await prisma.user.findUnique({
    where: { githubId: profile.id.toString() },
  });

  if (existingUser) return existingUser;

  return prisma.user.create({
    data: {
      githubId: profile.id.toString(),
      name: profile.displayName || profile.username,
      email: profile.emails?.[0]?.value,
      password: "",
    },
    select: { id: true, email: true, name: true, createdAt: true },
  });
};
