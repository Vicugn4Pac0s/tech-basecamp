import { BlogArticle } from "../types/blog";

type Props = {
  item: BlogArticle;
};

export default function BlogCard({ item }: Props) {
  let url = `/blog/${item._id}`;
  let target = "_self";
  if (item.articleUrl !== "") {
    url = item.articleUrl;
    target = "_blank";
  } else if (item.youtubeId !== "") {
    url = `https://www.youtube.com/watch?v=${item.youtubeId}`;
    target = "_blank";
  }

  return (
    <div key={item._id} className="w-full">
      <a href={url} target={target}>
        <h1>{item.title}</h1>
      </a>
    </div>
  );
}
