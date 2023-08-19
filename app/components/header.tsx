import Image from "next/image";
import Link from "next/link";
import Inner from "./inner";

export default function Header() {
  return (
    <header className="bg-[#eee]">
      <Inner>
        <div className="py-5">
          <Link href="/">
            <Image src="/logo.svg" alt="" height="19" width="202"></Image>
          </Link>
        </div>
      </Inner>
    </header>
  );
}
