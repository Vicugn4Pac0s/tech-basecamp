"use client";

import { useEffect, useState } from "react";
import { client, getBlogsData } from "../libs/client"
import { BlogArticle } from "../types/blog";

export default function Blogs() {
  const [articles, setArticles] = useState<BlogArticle[]>([])
  const [limit, setLimt] = useState(3)

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
        <div key={item._id}>
          <a href={`/blog?id=${item._id}`}>
            <h1>{item.title}</h1>
          </a>
        </div>
      ))}
    </div>
  )
}