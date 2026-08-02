import { twMerge } from "tailwind-merge";

interface PerPageSelectProps {
  limit: number;
  onLimitChange: (limit: number) => void;
  options?: number[];
  className?: string;
}

const PerPageSelect = ({
  limit,
  onLimitChange,
  options = [5, 10, 15, 20,50],
  className = "",
}: PerPageSelectProps) => {
  return (
    <select
      value={limit}
      onChange={(e) => onLimitChange(Number(e.target.value))}
      className={twMerge(
        "rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 focus:border-primary focus:outline-none inter cursor-pointer hover:bg-slate-200 transition duration-500",
        className,
      )}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}/Page
        </option>
      ))}
    </select>
  );
};

export default PerPageSelect;
