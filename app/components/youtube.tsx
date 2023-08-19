"use client";

import { useEffect, useState } from "react";
import { initYouTubeAPI, onYoutubeReady } from "../libs/youtube";

type Props = {
  id: string;
  fadeOutYoutube: (player: YT.Player | null) => void
};

export default function Youtube({ id, fadeOutYoutube }: Props) {
  const [player, setPlayer] = useState<YT.Player | null>(null);

  useEffect(()=> {
    initYouTubeAPI();
    onYoutubeReady(() => {
      const newPlayer = new YT.Player(`yt-video`, {
        videoId: id,
      });
      setPlayer(newPlayer);
    });
  }, [id])

  useEffect(() => {
    if (player && player.cueVideoById) {
      player.cueVideoById(id);
    }
  }, [id, player]);

  const fadeOut = () => {
    fadeOutYoutube(player)
  }

  return (
    <div className="flex justify-center items-center h-full w-full" onClick={fadeOut}>
      <div id={`yt-video`}></div>
    </div>
  );
}