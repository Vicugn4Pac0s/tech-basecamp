import Image from "next/image";
import Inner from "./inner";

export default function Mv() {
  return (
    <div className="bg-black h-[200px]">
      <Inner className="flex justify-center items-center h-full w-full">
        <h1 className="text-3xl text-white">TECH BASECAMP</h1>
      </Inner>
    </div>
  );
}
