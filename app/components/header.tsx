import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#eee]">
      <div className="p-5">
        <Image src="/logo.svg" alt="" height="19" width="202"></Image>
      </div>
    </header>
  );
}
