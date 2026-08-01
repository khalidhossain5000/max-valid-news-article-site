import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import { IoMdClose } from "react-icons/io";
import ImageUploadModal from "./ImageUploadModal";
import EditorToolbar from "./EditorToolBar";
import toast from "react-hot-toast";
import { Link } from "react-router";

const MAX_TITLE_LENGTH = 64;
const MAX_TAGS = 3;

const RichTextEditor = () => {
  const [title, setTitle] = useState("");

  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const [isFeatured, setIsFeatured] = useState(false);

  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // tiptap editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TaskList,
      TaskItem.configure({ nested: true }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none min-h-[190px] focus:outline-none",
      },
    },
  });

  // tag input
  const handleTagInputChange = (value: string) => {
    if (value.includes(",")) {
      const newTag = value.split(",")[0].trim();
      if (newTag && tags.length < MAX_TAGS && !tags.includes(newTag)) {
        setTags((prev) => [...prev, newTag]);
      }
      setTagInput("");
    } else {
      setTagInput(value);
    }
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleSubmit = () => {
      const isContentEmpty = !editor || editor.getText().trim().length === 0;
 
    if (!title.trim()) {
      toast.error("Content Title is required");
      return;
    }
 
    if (isContentEmpty) {
      toast.error("Content Body is required");
      return;
    }
 
    if (tags.length === 0) {
      toast.error("At least one tag is required");
      return;
    }
 
    if (!thumbnail) {
      toast.error("Thumbnail image is required");
      return;
    }
 
    const payload = {
      title,
      content: editor?.getHTML(),
      tags,
      isFeatured,
      thumbnail,
    };
    console.log("Submitting:", payload);
    // create post api call func here
  };

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5">
      {/* title */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Content Title
        </label>
        <div className="relative">
          <input
            type="text"
            value={title}
            maxLength={MAX_TITLE_LENGTH}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Plan name"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5 pr-14 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none"
          />
          <span className="absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray-400">
            {title.length}/{MAX_TITLE_LENGTH}
          </span>
        </div>
      </div>

      {/* toolbar*/}
      <EditorToolbar
        editor={editor}
        onImageClick={() => setIsModalOpen(true)}
      />

      {/* content body */}
      <div className="mt-3">
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Content Body
        </label>
        <div
          onClick={() => editor?.chain().focus().run()}
          className="cursor-text rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
        >
          <EditorContent editor={editor} />
        </div>
      </div>

      {/* tags */}
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Tag (max {MAX_TAGS})
        </label>
        <div className="flex flex-wrap items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700"
            >
              {tag}
              <button type="button" onClick={() => removeTag(tag)}>
                <IoMdClose size={12} />
              </button>
            </span>
          ))}
          {tags.length < MAX_TAGS && (
            <input
              type="text"
              value={tagInput}
              onChange={(e) => handleTagInputChange(e.target.value)}
              placeholder={tags.length === 0 ? "Plan name" : ""}
              className="min-w-[100px] flex-1 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
            />
          )}
        </div>
      </div>

      {/* is featured */}
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={isFeatured}
          onClick={() => setIsFeatured((prev) => !prev)}
          className={`relative h-6 w-11 shrink-0 rounded-full p-0 transition-colors duration-200 ${isFeatured ? "bg-primary" : "bg-gray-300"}`}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${isFeatured ? "translate-x-5" : "translate-x-0"}`}
          />
        </button>
        <span className="text-sm font-medium text-gray-700">Is Featured</span>
      </div>

      {/* thumbnail preview */}
      {thumbnail && (
        <div className="mt-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Thumbnail
          </label>
          <div className="relative inline-block">
            <img
              src={thumbnail}
              alt="Thumbnail preview"
              className="h-32 w-56 rounded-lg object-cover"
            />
            <button
              type="button"
              onClick={() => setThumbnail(null)}
              className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white"
            >
              <IoMdClose size={14} />
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
        <Link to="/dashboard/content-management">
        <button
          type="button"
          className="rounded-lg border border-gray-200 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        </Link>
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary-hover"
        >
          Create Content
        </button>
      </div>

      <ImageUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpload={(url) => setThumbnail(url)}
      />
    </div>
  );
};

export default RichTextEditor;
