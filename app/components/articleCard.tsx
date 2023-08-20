"use client";

import Image from "next/image";
import { MediaArticle } from "../types/MediaArticle";
import { extractDomain, extractYouTubeVideoId } from "../libs/utilities";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  item: MediaArticle;
  fadeInYoutube?: (youtubeId: string) => void;
};

export default function ArticleCard({ item, fadeInYoutube }: Props) {
  let imgPath = "/logo.svg";
  if (item.coverImage) {
    imgPath = item.coverImage.src;
  }


  const clickLink = (articleUrl: string) => (event: React.MouseEvent) => {
    const articleDomain = extractDomain(articleUrl);
    if (articleDomain === "youtube.com") {
      if (!fadeInYoutube) return;
      event.preventDefault();
      fadeInYoutube(extractYouTubeVideoId(articleUrl));
    }
  };

  const [ogData, setOgData] = useState({});

  useEffect(() => {
    const fetchOgpData = async () => {
      const response = await axios.get(`/api/get_ogp?url=${item.articleUrl}`);
      setOgData(response.data)
    };
    fetchOgpData();
  }, []);

  return (
    <article
      key={item._id}
      className="h-full w-full relative rounded overflow-hidden"
    >
      <a
        href={item.articleUrl}
        target="_blank"
        className="block h-full p-3 hover:bg-[#f9f9f9]"
        onClick={clickLink(item.articleUrl)}
      >
        <div className="mb-2">
          <Image
            src={imgPath}
            height={512}
            width={1280}
            alt=""
            className="h-[100px] object-cover"
          ></Image>
        </div>
        <div className="mb-1">
          {item.tags.map((tag) => (
            <div className="text-[#999] inline mr-1 text-xs">{tag.name}</div>
          ))}
        </div>
        <h1 className="text-sm">{item.title}</h1>
      </a>
    </article>
  );
}
