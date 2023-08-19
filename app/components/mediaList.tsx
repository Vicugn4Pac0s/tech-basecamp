"use client";

import { useState } from "react";
import { gsap } from "../libs/gsap";
import { MediaArticle } from "../types/MediaArticle";
import ArticleCard from "./articleCard";
import Youtube from "./youtube";

type props = {
  articles: MediaArticle[];
  limit?: number;
};

export default function MediaList({ articles, limit = 12 }: props) {
  articles.length = limit;

  const fadeInYoutube = (youtubeId: string) => {
    gsap.to('#js-youtube-modal', {
      opacity: 0.9,
      pointerEvents: 'auto'
    })
    setYoutubeId(youtubeId)
  }
  const fadeOutYoutube = (player: YT.Player | null) => {
    gsap.to('#js-youtube-modal', {
      opacity: 0,
      pointerEvents: 'none'
    })
    player?.pauseVideo()
  }

  const [youtubeId, setYoutubeId] = useState('')
  
  return (
    <div>
      <div className="flex flex-wrap">
        {articles.map((item) => (
          <div className="w-[250px]">
            <ArticleCard item={item} fadeInYoutube={fadeInYoutube}></ArticleCard>
          </div>
        ))}
      </div>
      <div id="js-youtube-modal" className="bg-black fixed top-0 left-0 h-full w-full z-50 opacity-0 pointer-events-none">
        <Youtube id={youtubeId} fadeOutYoutube={fadeOutYoutube}></Youtube>
      </div>
    </div>
  );
}
