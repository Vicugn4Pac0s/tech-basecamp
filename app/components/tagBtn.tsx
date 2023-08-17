"use client";

type props = {
  name: string
}

export default function TagBtn({name}: props) {
  return (
    <div className="bg-[#eee] py-1 px-2 cursor-pointer hover:bg-black hover:text-white">{name}</div>
  )
}