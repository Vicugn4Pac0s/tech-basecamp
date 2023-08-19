"use client";

import { MediaArticle } from "../types/MediaArticle";
import ArticleCard from "./articleCard";

type props = {
  articles: MediaArticle[],
  limit?: number
}

export default function MediaList({articles, limit = 12}: props) {
  articles.length = limit;
  return (
    <div className="flex flex-wrap">
      {articles.map((item) => (
        <div className="w-[250px]">
          <ArticleCard item={item}></ArticleCard>
        </div>
      ))}
    </div>
  )
}