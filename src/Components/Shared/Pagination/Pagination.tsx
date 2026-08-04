import { twMerge } from "tailwind-merge";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({
  page,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-400 disabled:opacity-40 cursor-pointer"
      >
        <IoChevronBack size={16} />
      </button>

      {pageNumbers.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          className={twMerge(
            "flex h-8 w-8 items-center justify-center  cursor-pointer rounded-md border text-sm font-medium",
            p === page
              ? "border-primary bg-primary text-white"
              : "border-primary text-primary",
          )}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="flex h-8 w-8 items-center justify-center cursor-pointer rounded-md border border-gray-200 text-gray-400 disabled:opacity-40"
      >
        <IoChevronForward size={16} />
      </button>
    </div>
  );
};

export default Pagination;
