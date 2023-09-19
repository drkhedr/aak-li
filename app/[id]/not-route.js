import prisma from "../../prisma/client";
import { notFound, redirect } from "next/navigation";

export async function GET(request, { params: { id } }) {
  const url = await prisma.uRL.findUnique({ where: { urlId: id } });
  if (!url) notFound();
  await prisma.uRL.update({
    where: { urlId: id },
    data: { visits: { increment: 1 } },
  });
  redirect(url.longUrl);
}

export function POST() {
  redirect("/");
}
