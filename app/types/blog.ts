export type BlogImage = {
  _id: string;
  src: string;
  fileType: string;
  fileSize: number;
  fileName: string;
  width: number;
  height: number;
};

export type BlogSysRaw = {
  createdAt: string;
  updatedAt: string;
  firstPublishedAt: string;
  publishedAt: string;
};

export type BlogSys = {
  createdAt: string;
  updatedAt: string;
  raw: BlogSysRaw;
};

export type BlogMeta = {
  title: string;
  description: string;
  ogImage: BlogImage;
};

export type BlogArticle = {
  _id: string;
  _sys: BlogSys;
  title: string;
  slug: string;
  meta: BlogMeta;
  body: string;
  coverImage: BlogImage;
  author: string;
  tags: string[];
};