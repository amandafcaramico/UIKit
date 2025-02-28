"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Image
        src={"/cover.jpg"}
        alt={"Banner"}
        width={500}
        height={0}
        priority
      />
      <Link href="/textfields">1. TextFields</Link>
      <Link href="/buttons">1. Buttons</Link>
    </div>
  );
}
