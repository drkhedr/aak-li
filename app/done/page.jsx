import Link from "next/link";
import { redirect } from "next/navigation";
export default async function DonePage({ searchParams: { id } }) {
  if (!id) redirect("/");
  return (
    <div className="w-full">
      <h1 className=" font-bold text-2xl my-5">Congratulations 🎉</h1>
      <h4 className=" mb-3">Here is your new URL</h4>
      <Link
        href={`${process.env.DOMAIN}/${id}`}
        target="_blank"
        className="underline text-indigo-600"
      >{`${process.env.DOMAIN}/${id}`}</Link>
    </div>
  );
}
