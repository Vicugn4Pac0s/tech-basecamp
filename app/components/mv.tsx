import Image from "next/image";
import Inner from "./inner";

type props = {
  title: string,
  description?: string
}

export default function Mv({title, description}: props) {
  return (
    <div className="bg-black h-[200px]">
      <Inner className="flex justify-center items-center h-full w-full">
        <div className="text-white text-center">
          <h1 className="text-3xl mb-4">{title}</h1>
          <p>
            {description}
          </p>
        </div>
      </Inner>
    </div>
  );
}
