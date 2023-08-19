import Link from "next/link";
import HeadingA from "./components/headingA";
import MediaList from "./components/mediaList";
import BtnA from "./components/btnA";

export default function Home() {
  return (
    <main>
      <HeadingA>メディア一覧</HeadingA>
      <div className="">記事一覧</div>
      <div className="text-center mt-4">
        <BtnA href="/media">もっとみる</BtnA>
      </div>
    </main>
  );
}
