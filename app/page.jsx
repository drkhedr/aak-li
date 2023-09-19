import Link from "next/link";
import { createUrl } from "../actions/serverActions";
import SubmitButton from "../components/SubmitButton";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-2xl">Paste the URL to be shortened</h1>
      <form action={createUrl}>
        <input
          type="url"
          name="longUrl"
          id="url"
          className="py-4 px-5 bg-gray-100 flex-shrink border border-white w-auto"
          placeholder="http://some-long-link.com/shorten/this/please"
          required
        />
        <SubmitButton
          className={
            "bg-indigo-500 text-center px-5 py-4 flex-shrink my-3 sm:mt-none font-bold"
          }
          submitValue={"Creating.."}
          value={"AAK.Li"}
        />
      </form>
      <p className="text-sm max-w-xl text-center">
        AAK.Li is a free tool to shorten URLs and generate short links URL
        shortener allows to create a shortened link making it easy to share
      </p>
    </>
  );
}
