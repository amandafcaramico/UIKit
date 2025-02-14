"use client";
import Image from "next/image";

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
    </div>
  );
}
