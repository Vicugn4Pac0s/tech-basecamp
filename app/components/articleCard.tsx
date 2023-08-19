import Image from "next/image";
import { MediaArticle } from "../types/MediaArticle";

type Props = {
  item: MediaArticle;
};

export default function ArticleCard({ item }: Props) {
  let imgPath = "/logo.svg";
  if (item.coverImage) {
    imgPath = item.coverImage.src;
  }

  return (
    <article key={item._id} className="h-full w-full relative rounded overflow-hidden">
      <a
        href={item.articleUrl}
        target="_blank"
        className="block h-full p-3 hover:bg-[#eee]"
      >
        <div className="mb-2">
          <Image src={imgPath} height={512} width={1280} alt="" className="h-[100px] object-cover"></Image>
        </div>
        <h1 className="mb-4">{item.title}</h1>
        <div>
          {item.tags.map((tag) => (
            <div className="inline-block mr-2 p-1">{tag.name}</div>
          ))}
        </div>
      </a>
    </article>
  );
}
