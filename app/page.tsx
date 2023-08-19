import Link from "next/link";
import HeadingA from "./components/headingA";
import MediaList from "./components/mediaList";
import BtnA from "./components/btnA";
import { getMediasData } from "./libs/client";

export default async function Home() {
  const articles = await getMediasData({
    limit: 6
  })
  return (
    <main>
      <HeadingA>メディア一覧</HeadingA>
      <MediaList articles={articles.items} limit={8}></MediaList>
      <div className="text-center mt-4">
        <BtnA href="/media">もっとみる</BtnA>
      </div>
    </main>
  );
}
