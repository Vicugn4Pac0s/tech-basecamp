"use client";

import { useEffect, useState } from "react";
import { getBlogTag, getBlogsData } from "../libs/client";
import { MediaArticle, MediaTag } from "../types/blog";
import BlogList from "./blogList";
import BlogTagList from "./blogTagList";

export default function BlogIndex() {
  const [articles, setArticles] = useState<MediaArticle[]>([]);
  const [tags, setTags] = useState<MediaTag[]>([]);
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
