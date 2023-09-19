"use server";

import prisma from "../prisma/client";
import { generateRandomString } from "../lib/helpers";
import { redirect } from "next/navigation";

export async function createUrl(formData) {
  const longurl = formData.get("longUrl");
  let newId = generateRandomString(5);
  try {
    const url = new URL(longurl);
    let found = true;
    while (found) {
      const oldUrl = await prisma.uRL.findFirst({ where: { urlId: newId } });
      if (!oldUrl) {
        found = false;
        break;
      }
      newId = generateRandomString(5);
    }

    const cretedUrl = await prisma.uRL.create({
      data: {
        longUrl: url.href,
        urlId: newId,
      },
    });
    const searchParams = new URLSearchParams([["id", newId]]).toString();
  } catch (err) {
    console.log(err);
  }
  redirect(`/done?id=${newId}`);
}
