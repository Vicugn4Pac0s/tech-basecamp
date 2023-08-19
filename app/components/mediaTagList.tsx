"use client";

import { Dispatch, SetStateAction } from "react";
import { MediaTag } from "../types/MediaArticle";
import TagBtn from "./tagBtn";

type props = {
  tags: MediaTag[]
  setCurrentTagId: Dispatch<SetStateAction<string>>
}

export default function MediaTagList({tags, setCurrentTagId}: props) {

  const setTag = (tagId: string) => () => {
    setCurrentTagId(tagId)
  }
  
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <div key="all" onClick={ setTag('') }>
        <TagBtn name='全て'></TagBtn>
      </div>
      {tags.map(item => (
        <div key={item._id} onClick={ setTag(item._id) }>
          <TagBtn name={item.name}></TagBtn>
        </div>
      ))}
    </div>
  )
}