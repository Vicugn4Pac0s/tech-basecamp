"use client";

type props = {
  name: string
}

export default function TagBtn({name}: props) {
  return (
    <div className="bg-[#eee] text-sm py-1 px-2 rounded cursor-pointer hover:bg-black hover:text-white">{name}</div>
  )
}