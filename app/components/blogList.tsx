"use client";

import { useEffect, useState } from "react";
import { getBlogsData } from "../libs/client"
import { BlogArticle } from "../types/blog";
import BlogCard from "./blogCard";

export default function BlogList() {
  const [articles, setArticles] = useState<BlogArticle[]>([])
  const [limit, setLimt] = useState(5)

  useEffect(() => {
    async function fetchData() {
      const blogs = await getBlogsData({
        limit
      });
      setArticles(blogs.items);
    }
    fetchData();
  }, [limit]);

  return (
    <div>
      <input type="number" name="limit" min={1} max={20} onChange={(e)=> {setLimt(Number(e.target.value))}} />
      {articles.map(item => (
        <BlogCard item={item}></BlogCard>
      ))}
    </div>
  )
}