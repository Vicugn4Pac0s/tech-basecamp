"use client";

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
  initYouTubeAPI()
  onYoutubeReady(()=> {
    const player: YT.Player = new YT.Player(`yt-${id}`, {
      videoId: id
    })
  })

  return (
    <div>
      <div id={`yt-${id}`}></div>
    </div>
  );
}
