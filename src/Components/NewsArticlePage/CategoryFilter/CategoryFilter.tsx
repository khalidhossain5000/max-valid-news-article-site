import { twMerge } from "tailwind-merge";
import { categories } from "../../../data/categoriesData";

const allLabel = "All Gallery & Media";

interface CategoryFilterProps {
  activeCategory: string; // empty string mean all category
  onSelect: (category: string) => void;
  className?: string;
}

const CategoryFilter = ({
  activeCategory,
  onSelect,
  className = "",
}: CategoryFilterProps) => {
  const restCategories = categories.filter((c) => c !== allLabel);
  const allItems = [allLabel, ...restCategories];

  const isActive = (category: string) =>
    category === allLabel
      ? activeCategory === ""
      : activeCategory === category;

  const handleSelect = (category: string) => {
    onSelect(category === allLabel ? "" : category);
  };

  return (
    <div className={className}>
   
      <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
        {allItems.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleSelect(category)}
            className={twMerge(
              "shrink-0 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm whitespace-nowrap text-gray-700",
              isActive(category) && "border-primary bg-primary text-white cursor-pointer",
            )}
          >
            {category}
          </button>
        ))}
      </div>

   
      <div className="hidden w-full max-w-55 rounded-xl border border-gray-100 bg-white shadow-lg lg:block">
        {allItems.map((category, i) => (
          <button
            key={`c${i}`}
            type="button"
            onClick={() => handleSelect(category)}
            className={twMerge(
              "block w-full border-l-4 border-transparent px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 cursor-pointer",
              i !== 0 && "border-t border-t-gray-200 cursor-pointer",
              isActive(category) &&
                "border-l-primary bg-primary/5 font-medium text-primary",
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
