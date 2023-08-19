"use client";

import { gsap } from "../libs/gsap";
import { MediaArticle } from "../types/MediaArticle";
import ArticleCard from "./articleCard";

type props = {
  articles: MediaArticle[];
  limit?: number;
};

export default function MediaList({ articles, limit = 12 }: props) {
  articles.length = limit;

  const fadeInYoutube = () => {
    gsap.to('#js-youtube-modal', {
      opacity: 0.9,
      pointerEvents: 'auto'
    })
  }
  const fadeOutYoutube = () => {
    gsap.to('#js-youtube-modal', {
      opacity: 0,
      pointerEvents: 'none'
    })
  }
  
  return (
    <div>
      <div className="flex flex-wrap">
        {articles.map((item) => (
          <div className="w-[250px]">
            <ArticleCard item={item} fadeInYoutube={fadeInYoutube}></ArticleCard>
          </div>
        ))}
      </div>
      <div id="js-youtube-modal" className="bg-black fixed top-0 left-0 h-full w-full z-50 opacity-0 pointer-events-none" onClick={fadeOutYoutube}></div>
    </div>
  );
}
