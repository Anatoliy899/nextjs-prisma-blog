import { FormData } from '@/types/blog';
import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const inputClass =
  'w-full py-2 px-3 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 rounded-md';

export const FormNewPost: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    title: '',
    content: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className={inputClass}
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="bm-4">
        <TextareaAutosize
          minRows={5}
          className={inputClass}
          name="content"
          placeholder="Enter the content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};
