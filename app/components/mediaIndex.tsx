"use client";

import { useEffect, useState } from "react";
import { getMediaTag, getMediasData } from "../libs/client";
import { MediaArticle, MediaTag } from "../types/MediaArticle";
import MediaList from "./mediaList";
import MediaTagList from "./mediaTagList";

export default function MediaIndex() {
  const [articles, setArticles] = useState<MediaArticle[]>([]);
  const [tags, setTags] = useState<MediaTag[]>([]);
  const [currentTagId, setCurrentTagId] = useState("");

  useEffect(() => {
    async function fetchTagData() {
      const tags = await getMediaTag();
      setTags(tags.items);
    }
    fetchTagData();
  }, []);

  useEffect(() => {
    async function fetchMediaData() {
      let query = [{}];
      if (currentTagId !== "") {
        query = [
          {
            tags: currentTagId,
          },
        ];
      }
      const medias = await getMediasData({
        and: [...query],
      });
      setArticles(medias.items);
    }
    fetchMediaData();
  }, [currentTagId]);

  return (
    <div>
      <MediaTagList tags={tags} setCurrentTagId={setCurrentTagId}></MediaTagList>
      <MediaList articles={articles}></MediaList>
    </div>
  );
}
