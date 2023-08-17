"use client";

import { useEffect, useState } from "react";
import { getBlogTag, getBlogsData } from "../libs/client"
import { BlogArticle, BlogTag } from "../types/blog";
import BlogList from "./blogList";
import BlogTagList from "./blogTagList";

export default function BlogIndex() {
  const [articles, setArticles] = useState<BlogArticle[]>([])
  const [tags, setTags] = useState<BlogTag[]>([])

  useEffect(() => {
    async function fetchData() {
      const blogs = await getBlogsData({
      });
      setArticles(blogs.items);
      const tags = await getBlogTag();
      setTags(tags.items);
    }
    fetchData();
  }, []);

  return (
    <div>
      <BlogTagList tags={tags}></BlogTagList>
      <BlogList articles={articles}></BlogList>
    </div>
  )
}