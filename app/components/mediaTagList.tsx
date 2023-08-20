"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MediaTag } from "../types/MediaArticle";
import { FilterQuery } from "newt-client-js/dist/types/types";

type props = {
  tags: MediaTag[];
  setTagsQuery: Dispatch<SetStateAction<FilterQuery[]>>;
};

export default function MediaTagList({ tags, setTagsQuery }: props) {
  const [selectTagsId, setSelectTagsId] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked && !selectTagsId.includes(value)) {
      setSelectTagsId([...selectTagsId, value]);
    } else if (!checked && selectTagsId.includes(value)) {
      setSelectTagsId(selectTagsId.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    const queryArray: FilterQuery[] = []
    selectTagsId.forEach((id) => {
      queryArray.push({
        tags: id
      })
    });
    setTagsQuery(queryArray)
  }, [selectTagsId]);

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((item) => (
        <div key={item._id}>
          <input
            type="checkbox"
            id={item._id}
            value={item._id}
            onChange={handleCheckboxChange}
            className="hidden"
          />
          <label htmlFor={item._id} className={`px-3 py-1 rounded cursor-pointer ${selectTagsId.includes(item._id) ? 'bg-[#000] text-white' : 'bg-[#eee]'}`}>{item.name}</label>          
        </div>
      ))}
    </div>
  );
}
