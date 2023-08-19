import Link from "next/link";
import HeadingA from "./components/headingA";
import MediaList from "./components/mediaList";
import BtnA from "./components/btnA";
import { getMediasData } from "./libs/client";
import Mv from "./components/mv";
import Inner from "./components/inner";
import ContentsWrap from "./components/contentsWrap";

export default async function Home() {
  const articles = await getMediasData({
    limit: 6,
  });
  return (
    <main>
      <Mv
        title="TECH BASECAMP"
        description="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
      ></Mv>
      <ContentsWrap>
        <Inner>
          <HeadingA>メディア一覧</HeadingA>
          <MediaList articles={articles.items} limit={8}></MediaList>
          <div className="text-center mt-4">
            <BtnA href="/media">もっとみる</BtnA>
          </div>
        </Inner>
      </ContentsWrap>
    </main>
  );
}
