export type MediaImage = {
  _id: string;
  src: string;
  fileType: string;
  fileSize: number;
  fileName: string;
  width: number;
  height: number;
};

export type MediaSysRaw = {
  createdAt: string;
  updatedAt: string;
  firstPublishedAt: string;
  publishedAt: string;
};

export type MediaSys = {
  createdAt: string;
  updatedAt: string;
  raw: MediaSysRaw;
};

export type MediaTag = {
  name: string,
  slug: string,
  _id: string
}

export type MediaArticle = {
  _id: string;
  _sys: MediaSys;
  title: string;
  slug: string;
  tags: MediaTag[];
  articleUrl: string;
  body: string;
  coverImage: MediaImage;
  author: string;
};