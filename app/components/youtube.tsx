"use client";

import { useEffect, useState } from "react";
import { initYouTubeAPI, onYoutubeReady } from "../libs/youtube";

type Props = {
  id: string;
};

export default function Youtube({ id }: Props) {
  const [player, setPlayer] = useState<YT.Player | null>(null);
  const [ytId, setYtId] = useState(id);

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
      player.cueVideoById(ytId);
    }
  }, [ytId, player]);

  return (
    <div>
      <div id={`yt-video`}></div>
      <div
        onClick={() => {
          setYtId("Xw9hHVFBZUI");
        }}
      >
        Xw9hHVFBZUI
      </div>
      <div
        onClick={() => {
          setYtId("r6MoN5FWpoI");
        }}
      >
        r6MoN5FWpoI
      </div>
    </div>
  );
}
