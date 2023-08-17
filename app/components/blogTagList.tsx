"use client";

import { BlogTag } from "../types/blog";
import TagBtn from "./tagBtn";

type props = {
  tags: BlogTag[]
}

export default function BlogTagList({tags}: props) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map(item => (
        <div>
          <TagBtn name={item.name}></TagBtn>
        </div>
      ))}
    </div>
  )
}