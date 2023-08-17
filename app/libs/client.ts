import { GetContentsQuery, createClient } from 'newt-client-js'
import { BlogArticle, BlogTag } from '../types/blog';

export const client = createClient({
  spaceUid: 'tech-basecamp',
  token: 'igbyIwNJVbwBa20tLv1QdBkjaxErz7OrIRMr0EKujww',
  apiType: 'cdn' 
});

export const getBlogsData = async (query?: GetContentsQuery) => {
  const data = await client.getContents<BlogArticle>({
    appUid: 'blog',
    modelUid: 'article',
    query: query
  })
  return data;
};

export const getBlogData = async (contentId: string) => {
  const data = await client.getContent<BlogArticle>({
    appUid: 'blog',
    modelUid: 'article',
    contentId: contentId
  })
  return data;
};

export const getBlogTag = async () => {
  const data = await client.getContents<BlogTag>({
    appUid: 'blog',
    modelUid: 'tag'
  })
  return data;
};
