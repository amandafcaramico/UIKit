import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <nav className="flex w-full items-center justify-between px-4 py-2 absolute top-0 left-0 z-40">
      <Link
        href="/"
        className="flex flex-row gap-1 justify-center items-center hover:scale-[1.1] transition-all duration-500"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={22}
          height={22}
          className="object-cover"
        />
        <span className="font-semibold text-lg">UI Kit</span>
      </Link>
    </nav>
  );
};

export default Logo;
