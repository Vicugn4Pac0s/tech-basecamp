import Image from "next/image";
import Inner from "./inner";

type props = {
  title: string,
  description?: string,
  bgSrc?: string 
}

export default function Mv({title, description, bgSrc}: props) {
  return (
    <div className="bg-black h-[200px] relative overflow-hidden">
      <Inner className="flex justify-center items-center h-full w-full relative z-10">
        <div className="text-white text-center">
          <h1 className="text-3xl mb-4">{title}</h1>
          <p>
            {description}
          </p>
        </div>
      </Inner>
      <div className="bg-black absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-full w-full">
        <Image src={bgSrc? bgSrc: '/mv.jpg'} alt="" height={300} width={2880} className="opacity-50 h-full object-cover"></Image>
      </div>
    </div>
  );
}
