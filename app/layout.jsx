import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import anonymous from "../public/images/anonymous.png";
import fast from "../public/images/fast-loading.png";
import sharable from "../public/images/sharable.png";
import simple from "../public/images/simple.png";
import secure from "../public/images/secure-2.png";
import unlimited from "../public/images/unlimited.png";
import faq from "../public/images/faq.png";

const poppins = Poppins({ weight: ["400", "700", "900"], subsets: ["latin"] });

export const metadata = {
  title: "AAK.li | Best URL Shortener",
  description:
    "AAK.li is a tool to shorten a long link and create a short URL easy to share on sites, chat and emails.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "AAK.li | Best URL Shortener",
    url: "https://aak.li/",
    type: "website",
    description:
      "AAK.li is a tool to shorten a long link and create a short URL easy to share on sites, chat and emails.",
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
    title: "AAK.li | Best URL Shortener",
    domain: "aak.li",
    description:
      "AAK.li is a tool to shorten a long link and create a short URL easy to share on sites, chat and emails.",
    images: ["https://aak.li/banner.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <main className="flex flex-col">
          <header className="px-4 py-5 border-b  w-full flex items-center justify-center">
            <Link
              href={"/"}
              className="font-bold text-indigo-600 text-3xl mt-8"
            >
              AAK.Li
            </Link>
          </header>
          <div className="m-auto flex flex-col w-full h-full justify-between items-center">
            <section>{children}</section>
            <h1 className="text-bold text-3xl text-center font-bold mt-5 mx-5">
              Shorten Your Link Now!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-between">
              <section className="max-w-xs">
                <div className="flex flex-col items-center justify-between h-full">
                  <Image src={simple} alt="Simple Vector art" />
                  <div>
                    <h1 className="font-bold text-2xl">Simple</h1>
                    <p>
                      Turn a long ugly link into a small short link in a click.
                    </p>
                  </div>
                </div>
              </section>
              <section className="max-w-xs">
                <div className="flex flex-col items-center justify-between h-full">
                  <Image src={fast} alt="Simple Vector art" />
                  <div>
                    <h1 className="font-bold text-2xl">Fast</h1>
                    <p>All is done in a blazing fast speeds.</p>
                  </div>
                </div>
              </section>
              <section className="max-w-xs">
                <div className="flex flex-col items-center justify-between h-full">
                  <Image src={anonymous} alt="Simple Vector art" />
                  <div>
                    <h1 className="font-bold text-2xl">Anonymous</h1>
                    <p>
                      No Sign In or Sign Up is required. No Logs are recorded.
                    </p>
                  </div>
                </div>
              </section>
              <section className="max-w-xs">
                <div className="flex flex-col items-center justify-between h-full">
                  <Image src={sharable} alt="Simple Vector art" />
                  <div>
                    <h1 className="font-bold text-2xl">Sharable</h1>
                    <p>Get a short link to share insted of long urls.</p>
                  </div>
                </div>
              </section>
              <section className="max-w-xs">
                <div className="flex flex-col items-center justify-between h-full">
                  <Image src={secure} alt="Simple Vector art" />
                  <div>
                    <h1 className="font-bold text-2xl">Secure</h1>
                    <p>No information required, then more security.</p>
                  </div>
                </div>
              </section>
              <section className="max-w-xs">
                <div className="flex flex-col items-center justify-between h-full">
                  <Image src={unlimited} alt="Simple Vector art" />
                  <div>
                    <h1 className="font-bold text-2xl">Unlimited</h1>
                    <p>You can make unlimited URLs as much as you can.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        <footer class="p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 max-w-4xl mx-auto mt-4">
          <span class="text-sm text-indigo-500 sm:text-center">
            &copy; 2023{" "}
            <Link href="/" class="hover:underline">
              AAK.Li™
            </Link>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
            <li>
              <Link
                href="#"
                class="mr-4 text-sm text-indigo-500 hover:underline md:mr-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="mr-4 text-sm text-indigo-500 hover:underline md:mr-6 "
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="mr-4 text-sm text-indigo-500 hover:underline md:mr-6 "
              >
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" class="text-sm text-indigo-500 hover:underline ">
                Contact
              </Link>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
