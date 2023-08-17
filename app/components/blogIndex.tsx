"use client";

import { useEffect, useState } from "react";
import { getBlogTag, getBlogsData } from "../libs/client"
import { BlogArticle, BlogTag } from "../types/blog";
import BlogList from "./blogList";
import BlogTagList from "./blogTagList";

export default function BlogIndex() {
  const [articles, setArticles] = useState<BlogArticle[]>([])
  const [tags, setTags] = useState<BlogTag[]>([])
  const [currentTagId, setCurrentTagId] = useState('')

  useEffect(() => {
    async function fetchData() {
      let blogQuery = {}
      if(currentTagId !== '') {
        blogQuery = {
          and: [
            {
              tags: currentTagId
            }
          ]
        }
      }
      const blogs = await getBlogsData(blogQuery);
      setArticles(blogs.items);
      const tags = await getBlogTag();
      setTags(tags.items);
    }
    fetchData();
  }, [currentTagId]);

  return (
    <div>
      <BlogTagList tags={tags} setCurrentTagId={setCurrentTagId}></BlogTagList>
      <BlogList articles={articles}></BlogList>
    </div>
  )
}