"use client";

import { client, getBlogsData } from "../libs/client"

export default async function Blogs() {
  const blogs = await getBlogsData()
  return (
    <div>
      {blogs.items.map(item => (
        <div key={item._id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  )
}