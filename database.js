import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const generateRandomString = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
export async function createUrl(url) {
  try {
    new URL(url);
    let urlId = generateRandomString(5);
    let found = true;
    while (found) {
      const oldUrl = getUrl(urlId);
      if (!oldUrl) {
        found = false;
      }
      urlId = generateRandomString(5);
    }
    const newId = await prisma.uRL.create({
      data: {
        id: urlId,
        longUrl: url,
      },
    });
    return newId;
  } catch (e) {
    console.log(e);
    await prisma.$disconnect();
  }
}
export async function getUrl(id) {
  const result = await prisma.uRL.findUnique({
    where: { id: id },
  });
  return result;
}
