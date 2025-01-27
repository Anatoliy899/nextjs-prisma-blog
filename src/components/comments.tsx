import React from 'react';

const Comments: React.FC = () => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold">Comments</h1>
      <ul>
        <li className="mb-4 bg-slate-300 p-2">
          <div className="flex items-center mb-2">
            <div className="text-blue-500 font-bold mr-2">john doe</div>
            <div className="text-gray-500">10.11.1024</div>
          </div>
          <p>Wow awesome bro!!!</p>
        </li>
      </ul>
    </div>
  );
};

export default Comments;
