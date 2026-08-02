import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { IoEllipsisVertical, IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import Swal from "sweetalert2";

interface ActionMenuProps {
  editPath: string;
  onDeleteConfirm: () => void; 
}

const ActionMenu = ({ editPath, onDeleteConfirm }: ActionMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDeleteClick = async () => {
    setIsOpen(false);

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This content will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
    });

    if (result.isConfirmed) {
      onDeleteConfirm();
    }
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-gray-500 hover:text-gray-900 cursor-pointer transition duration-500"
      >
        <IoEllipsisVertical size={18} />
      </button>

      {isOpen && (
        <div className="fixed right-0 z-100 mt-1 w-36 ld:w-44 rounded-lg border border-gray-100 bg-slate-200 py-1 shadow-lg">
          <Link
            to={editPath}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <IoCreateOutline size={16} />
            Edit
          </Link>
          <button
            type="button"
            onClick={handleDeleteClick}
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
          >
            <IoTrashOutline size={16} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;