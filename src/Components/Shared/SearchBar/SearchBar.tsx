import { useState, useRef } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  value: string;
  onSearch: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({
  value,
  onSearch,
  placeholder = "Search Content",
  className = "",
}: SearchBarProps) => {
  const [localValue, setLocalValue] = useState(value);
  const [prevValue, setPrevValue] = useState(value); // 
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  
  if (value !== prevValue) {
    setPrevValue(value);
    setLocalValue(value);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch(newValue);
    }, 450);
  };

  return (
    <div className={`relative ${className}`}>
      <IoSearch
        className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
        size={18}
      />
      <input
        type="text"
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-primary focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;