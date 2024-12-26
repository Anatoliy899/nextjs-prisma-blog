import Comments from '@/components/comments';
import FormNewComment from '@/components/form-new-comment';
import React from 'react';

const BlogDetailPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post One</h1>
      <p>Author: Firstname Lastname</p>
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        culpa distinctio quasi hic, voluptates quas commodi voluptas neque
        explicabo molestiae.
      </div>
      <Comments />
      <FormNewComment />
    </div>
  );
};

export default BlogDetailPage;
