import { createClient } from 'newt-client-js'
import { BlogArticle } from '../types/blog';

export const client = createClient({
  spaceUid: 'tech-basecamp',
  token: 'igbyIwNJVbwBa20tLv1QdBkjaxErz7OrIRMr0EKujww',
  apiType: 'cdn' 
});

export const getBlogsData = async () => {
  const data = await client.getContents<BlogArticle>({
    appUid: 'blog',
    modelUid: 'article'
  })
  return data;
};
