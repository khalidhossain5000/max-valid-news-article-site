import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (url: string) => void;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ isOpen, onClose, onUpload }) => {
  if (!isOpen) return null;


  const handleUploadClick = () => {
    const dummyImageUrl = '';
    onUpload(dummyImageUrl);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-8 bg-white rounded-xl shadow-2xl text-center">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <IoMdClose size={24} />
        </button>

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="p-4 bg-gray-50 rounded-full">
            <FiUploadCloud size={48} className="text-gray-700" />
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900">Choose a file or drag & drop it here</h3>
            <p className="text-sm text-gray-500 mt-1">PDF, JPG, JPEG, PNG. MAX (5MB)</p>
          </div>

          <button
            onClick={handleUploadClick}
            className="px-6 py-2 mt-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Browse File
          </button>
          
          <p className="text-xs text-gray-400 mt-4">Recommended size: 1200 x 628px</p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;