import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { FiBold, FiItalic, FiImage, FiList } from 'react-icons/fi';
import ImageUploadModal from './ImageUploadModal';

const RichTextEditor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: '',
  });

  if (!editor) return null;

  // ছবি ইনসার্ট করার ফাংশন
  const addImage = (url: string) => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
    setIsModalOpen(false);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
  
      <div className="flex gap-2 p-2 border-b border-gray-200 bg-gray-50">
        <button 
          onClick={() => editor.chain().focus().toggleBold().run()} 
          className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
        >
          <FiBold />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleItalic().run()} 
          className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
        >
          <FiItalic />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleBulletList().run()} 
          className="p-2 hover:bg-gray-200 rounded"
        >
          <FiList />
        </button>
        <div className="w-px bg-gray-300 mx-1"></div>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="p-2 hover:bg-gray-200 rounded text-blue-600"
        >
          <FiImage />
        </button>
      </div>

      {/* এডিটর এরিয়া */}
      <div className="p-4 min-h-[300px] prose max-w-none">
        <EditorContent editor={editor} />
      </div>

      {/* মডাল কানেকশন */}
      <ImageUploadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onUpload={addImage} 
      />
    </div>
  );
};

export default RichTextEditor;