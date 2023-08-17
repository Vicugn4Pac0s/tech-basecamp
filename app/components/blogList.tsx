"use client";

import { BlogArticle } from "../types/blog";
import BlogCard from "./blogCard";

type props = {
  articles: BlogArticle[]
}

export default function BlogList({articles}: props) {
  return (
    <div className="flex flex-wrap gap-5">
      {articles.map(item => (
        <div className="w-[320px]">
          <BlogCard item={item}></BlogCard>
        </div>
      ))}
    </div>
  )
}