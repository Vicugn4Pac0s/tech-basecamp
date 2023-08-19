import Link from "next/link";

type props = {
  children: React.ReactNode,
  href: string
}

export default function BtnA({children, href}: props) {
  return (
    <Link href={href} className="bg-black text-white text-lg px-5 py-1 rounded inline-block">{children}</Link>
  );
}
