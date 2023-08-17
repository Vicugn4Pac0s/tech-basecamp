"use client";

import { Dispatch, SetStateAction } from "react";
import { BlogTag } from "../types/blog";
import TagBtn from "./tagBtn";

type props = {
  tags: BlogTag[]
  setCurrentTagId: Dispatch<SetStateAction<string>>
}

export default function BlogTagList({tags, setCurrentTagId}: props) {

  const setTag = (tagId: string) => () => {
    setCurrentTagId(tagId)
  }
  
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map(item => (
        <div key={item._id} onClick={ setTag(item._id) }>
          <TagBtn name={item.name}></TagBtn>
        </div>
      ))}
    </div>
  )
}