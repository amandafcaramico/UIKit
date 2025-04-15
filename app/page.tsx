"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col p-10 w-[21vw] space-y-8 ">
        <span className="text-xl">Contents</span>
        <Link
          href="/textfields"
          className="hover:scale-105 transition-all duration-500 text-2xl"
        >
          <span className="font-normal">1. </span>
          <span className="font-semibold gradient-text">Textfields</span>
        </Link>
        <Link
          href="/buttons"
          className="hover:scale-105 transition-all duration-500 text-2xl"
        >
          <span className="font-normal">2. </span>
          <span className="font-semibold gradient-text">Buttons</span>
        </Link>
        <Link
          href="/selectors"
          className="hover:scale-105 transition-all duration-500 text-2xl"
        >
          <span className="font-normal">3. </span>
          <span className="font-semibold gradient-text">Selectors</span>
        </Link>
      </div>
      <Link
        href={
          "https://www.figma.com/design/hKMemKDcDjImBMQMbAkqEH/Style-Guidelines-(Community)?node-id=24-32&t=tpGyY0HtBgkC6zva-1"
        }
        className="absolute text-xl font-semibold underline underline-offset-2 text-primary rotate-[330deg] right-[52%] top-[52%] z-10
        transition-all duration-500 hover:text-[1.35rem] hover:text-secondary"
      >
        Figma
      </Link>
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[79vw] h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/cover2.jpg')" }}
      />
    </>
  );
}
