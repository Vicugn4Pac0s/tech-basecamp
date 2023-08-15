"use client";

import { useEffect } from "react";
import { initYouTubeAPI, onYoutubeReady } from "../libs/youtube";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

type Props = {
  id: string;
};

export default function Youtube({ id }: Props) {
  let player: YT.Player;
  initYouTubeAPI()
  onYoutubeReady(()=> {
    player = new YT.Player(`yt-video`, {
      videoId: id
    })
  })

  useEffect(()=> {
    player?.cueVideoById(id)
  }, [id])

  return (
    <div>
      <div id={`yt-video`}></div>      
    </div>
  );
}