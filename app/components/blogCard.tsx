import Image from "next/image";
import { BlogArticle } from "../types/blog";

type Props = {
  item: BlogArticle;
};

export default function BlogCard({ item }: Props) {

  let imgPath = "/vercel.svg";
  if (item.coverImage) {
    imgPath = item.coverImage.src;
  }

  return (
    <article key={item._id} className="h-full w-full relative">
      <a
        href={item.articleUrl}
        target='_blank'
        className="block h-full p-4 hover:bg-[#eee]"
      >
        <Image src={imgPath} height={512} width={1280} alt=""></Image>
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
