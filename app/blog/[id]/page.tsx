import Youtube from "@/app/components/youtube";
import { getBlogData } from "../../libs/client";
import TestGsap from "@/app/components/testGsap";

interface PageProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Blog({params, searchParams}: PageProps) {
  const article = await getBlogData(params.id);
  return (
    <main>
      blog
      {article.title}

      <Youtube id='Xw9hHVFBZUI'></Youtube>

      <TestGsap></TestGsap>
    </main>
  )
}