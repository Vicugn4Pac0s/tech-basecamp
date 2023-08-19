import { GetContentsQuery, createClient } from 'newt-client-js'
import { MediaArticle, MediaTag } from '../types/MediaArticle';

export const client = createClient({
  spaceUid: 'tech-basecamp',
  token: 'igbyIwNJVbwBa20tLv1QdBkjaxErz7OrIRMr0EKujww',
  apiType: 'cdn' 
});

export const getMediasData = async (query?: GetContentsQuery) => {
  const data = await client.getContents<MediaArticle>({
    appUid: 'blog',
    modelUid: 'article',
    query: query
  })
  return data;
};

export const getMediaData = async (contentId: string) => {
  const data = await client.getContent<MediaArticle>({
    appUid: 'blog',
    modelUid: 'article',
    contentId: contentId
  })
  return data;
};

export const getMediaTag = async () => {
  const data = await client.getContents<MediaTag>({
    appUid: 'blog',
    modelUid: 'tag'
  })
  return data;
};
