import React, { useState, useRef } from "react";
import { FiLoader } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { imageUpload } from "../../../service/uploadImage";
import { IoCloudUpload } from "react-icons/io5";

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (url: string) => void;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  isOpen,
  onClose,
  onUpload,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("File size is too big! Please select an image smaller than 2MB.");
      return;
    }

    setIsLoading(true);

    try {
      const imageUrl = await imageUpload(file);
      console.log(imageUrl, "udsfhsjdkf");
      if (imageUrl) {
        onUpload(imageUrl);
        onClose();
      } else {
        alert("Upload failed! Please try again.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Something went wrong during upload.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-md lg:max-w-2xl p-8 bg-background border-2 border-dashed border-slate-400 rounded-xl shadow-2xl text-center animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-primary cursor-pointer hover:text-gray-700"
        >
          <IoMdClose size={24} />
        </button>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10">
            <FiLoader size={48} className="animate-spin text-primary mb-4" />
            <p className="text-lg font-medium text-gray-700">Uploading...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 py-6">
            <div className="p-4 bg-gray-50 rounded-full">
              <IoCloudUpload size={48} className="text-gray-700" />
            </div>
            <div>
              <h3 className="text-lg font-medium inter text-text-primary">
                Choose a file or drag & drop it here
              </h3>
              <p className="text-sm text-secondary inter mt-1">
                PDF, JPG, JPEG, PNG. MAX (2MB)
              </p>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-2 border border-slate-400 text-[#1e3a5f] bg-[#e9ecef] rounded-xl inter text-sm lg:text-lg cursor-pointer transition-colors mt-2 lg:mt-4 hover:bg-slate-400  hover:text-slate-100   duration-500"
            >
              Browse File
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploadModal;
