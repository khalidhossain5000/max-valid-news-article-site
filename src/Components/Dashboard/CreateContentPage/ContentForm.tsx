import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import RichTextEditor from './RichTextEditor';

const ContentForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 64) {
      setTitle(e.target.value);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      
      {/* Content Title */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Content Title
        </label>
        <div className="relative">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Plan name"
            className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
          />
          <span className="absolute right-4 top-3.5 text-sm text-gray-400">
            {title.length} / 64
          </span>
        </div>
      </div>

      {/* Content Body  */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Content Body
        </label>
        <RichTextEditor />
      </div>

      {/* Tag Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Tag (max 3)
        </label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Plan name"
          className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
        />
      </div>

      {/* Featured Image Preview */}
      <div className="mb-8 relative w-48 h-28 rounded-xl overflow-hidden group border border-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Featured Preview" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-2">
          <button className="text-white hover:text-red-500 transition-colors p-1 bg-white/20 rounded-md backdrop-blur-sm">
            <FiTrash2 size={18} />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end items-center gap-4 pt-6 border-t border-gray-100">
        <button className="px-6 py-2.5 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
          Create Content
        </button>
      </div>

    </div>
  );
};

export default ContentForm;