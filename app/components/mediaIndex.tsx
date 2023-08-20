"use client";

import { useEffect, useState } from "react";
import { getMediaTag, getMediasData } from "../libs/client";
import { MediaArticle, MediaTag } from "../types/MediaArticle";
import MediaList from "./mediaList";
import MediaTagList from "./mediaTagList";
import { FilterQuery, GetContentsQuery } from "newt-client-js/dist/types/types";

export default function MediaIndex() {
  const [articles, setArticles] = useState<MediaArticle[]>([]);
  const [tags, setTags] = useState<MediaTag[]>([]);
  const [tagsQuery, setTagsQuery] = useState<FilterQuery[]>([])

  useEffect(() => {
    async function fetchTagData() {
      const tags = await getMediaTag();
      setTags(tags.items);
    }
    fetchTagData();
  }, []);

  useEffect(() => {
    async function fetchMediaData() {
      const query: GetContentsQuery = {}
      if(tagsQuery.length > 0) {
        query.or = [...tagsQuery]
      }
      const medias = await getMediasData(query);
      setArticles(medias.items);
    }
    fetchMediaData();
  }, [tagsQuery]);

  return (
    <div>
      <MediaTagList tags={tags} setTagsQuery={setTagsQuery}></MediaTagList>
      <MediaList articles={articles}></MediaList>
    </div>
  );
}
