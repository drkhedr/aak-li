import prisma from "../../prisma/client";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata({ params: { id } }) {
  return {
    title: `Get ${id} full url on AAK.li | Best URL Shortener`,
    description: `${id} full URL. Get it on AAK.li. AAK.li is a tool to shorten a long link and create a short URL easy to share on sites, chat and emails.`,
    openGraph: {
      title: `Get ${id} full url on AAK.li | Best URL Shortener`,
      url: `https://aak.li/${id}`,
      type: "website",
      description: `${id} full URL. Get it on AAK.li. AAK.li is a tool to shorten a long link and create a short URL easy to share on sites, chat and emails.`,
      images: [
        {
          url: "https://aak.li/banner.jpg",
          width: 1920,
          height: 1080,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Get ${id} full url on AAK.li | Best URL Shortener`,
      description: `${id} full URL. Get it on AAK.li. AAK.li is a tool to shorten a long link and create a short URL easy to share on sites, chat and emails.`,
      domain: "aak.li",
      images: ["https://aak.li/banner.jpg"],
    },
  };
}
export default async function URLRedirectPage({ params: { id } }) {
  const url = await prisma.uRL.findUnique({ where: { urlId: id } });
  if (!url) notFound();
  await prisma.uRL.update({
    where: { urlId: id },
    data: { visits: { increment: 1 } },
  });
  redirect(url.longUrl);
}
