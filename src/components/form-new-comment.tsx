'use client';
import React from 'react';

const FormNewComment: React.FC = () => {
  const [comment, setComment] = React.useState<string>('');

  return (
    <div className="mt-4">
      <label
        htmlFor="comment"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Add comment
      </label>
      <input
        value={comment}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setComment(e.target.value)
        }
        type="text"
        className="w-full py-2 px-3 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 rounded-md"
        name="comment"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Submit comment
      </button>
    </div>
  );
};

export default FormNewComment;
