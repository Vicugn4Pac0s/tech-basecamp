"use client";

import { useEffect, useState } from "react";
import { getBlogTag, getBlogsData } from "../libs/client";
import { BlogArticle, BlogTag } from "../types/blog";
import BlogList from "./blogList";
import BlogTagList from "./blogTagList";

export default function BlogIndex() {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [currentTagId, setCurrentTagId] = useState("");

  useEffect(() => {
    async function fetchTagData() {
      const tags = await getBlogTag();
      setTags(tags.items);
    }
    fetchTagData();
  }, []);

  useEffect(() => {
    async function fetchBlogData() {
      let query = [{}];
      if (currentTagId !== "") {
        query = [
          {
            tags: currentTagId,
          },
        ];
      }
      const blogs = await getBlogsData({
        and: [...query],
      });
      setArticles(blogs.items);
    }
    fetchBlogData();
  }, [currentTagId]);

  return (
    <div>
      <BlogTagList tags={tags} setCurrentTagId={setCurrentTagId}></BlogTagList>
      <BlogList articles={articles}></BlogList>
    </div>
  );
}
