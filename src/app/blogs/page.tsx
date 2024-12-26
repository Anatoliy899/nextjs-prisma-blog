import React from 'react';

import { posts } from '@/data/posts';
import Link from 'next/link';

console.log(posts);

const BlogsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            href={`/blogs/${post.id}`}
            key={post.id}
            className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100"
          >
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">Author: {post.username}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
