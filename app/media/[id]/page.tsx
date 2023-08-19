import Youtube from "@/app/components/youtube";
import { getMediaData } from "../../libs/client";
import TestGsap from "@/app/components/testGsap";

interface PageProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Media({params, searchParams}: PageProps) {
  const article = await getMediaData(params.id);
  return (
    <main>
      Media
      {article.title}

      <Youtube id='Xw9hHVFBZUI'></Youtube>

      <TestGsap></TestGsap>
    </main>
  )
}