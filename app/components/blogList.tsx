"use client";

import { MediaArticle } from "../types/blog";
import ArticleCard from "./articleCard";

type props = {
  articles: MediaArticle[]
}

export default function BlogList({articles}: props) {
  return (
    <div className="flex flex-wrap">
      {articles.map(item => (
        <div className="w-[250px]">
          <ArticleCard item={item}></ArticleCard>
        </div>
      ))}
    </div>
  )
}