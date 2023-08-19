import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#eee]">
      <div className="p-5">
        <Link href="/">
          <Image src="/logo.svg" alt="" height="19" width="202"></Image>
        </Link>
      </div>
    </header>
  );
}
