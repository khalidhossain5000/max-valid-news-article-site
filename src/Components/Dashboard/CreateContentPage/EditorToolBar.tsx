import type { Editor } from "@tiptap/react";
import { FaBold, FaItalic, FaUnderline, FaListCheck } from "react-icons/fa6";
import { IoImageOutline, IoArrowUndoOutline } from "react-icons/io5";

interface EditorToolbarProps {
  editor: Editor | null;
  onImageClick: () => void;
}

const EditorToolbar = ({ editor, onImageClick }: EditorToolbarProps) => {
  const btnClass = (isActive: boolean) =>
    `rounded-md p-2 text-sm ${
      isActive ? "bg-gray-800 text-white" : "bg-white text-gray-700"
    }`;

  return (
    <div className="mt-4 flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-1.5">
      <button
        type="button"
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className={btnClass(!!editor?.isActive("bold"))}
      >
        <FaBold />
      </button>

      <button
        type="button"
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        className={btnClass(!!editor?.isActive("italic"))}
      >
        <FaItalic />
      </button>

      <button
        type="button"
        onClick={() => editor?.chain().focus().toggleUnderline().run()}
        className={btnClass(!!editor?.isActive("underline"))}
      >
        <FaUnderline />
      </button>

      <button
        type="button"
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={`rounded-md px-2.5 py-2 text-sm font-semibold ${
          editor?.isActive("heading", { level: 2 })
            ? "bg-gray-800 text-white"
            : "bg-white text-gray-700"
        }`}
      >
        T
      </button>

      <button
        type="button"
        onClick={() => editor?.chain().focus().toggleTaskList().run()}
        className={btnClass(!!editor?.isActive("taskList"))}
      >
        <FaListCheck />
      </button>

      <button
        type="button"
        onClick={onImageClick}
        className="rounded-md bg-white p-2 text-sm text-gray-700"
      >
        <IoImageOutline />
      </button>

      <button
        type="button"
        onClick={() => editor?.chain().focus().undo().run()}
        className="rounded-md bg-white p-2 text-sm text-gray-700"
      >
        <IoArrowUndoOutline />
      </button>
    </div>
  );
};

export default EditorToolbar;