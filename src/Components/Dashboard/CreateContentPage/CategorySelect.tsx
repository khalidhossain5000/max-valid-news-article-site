import { categories } from "../../../data/categoriesData";

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CategorySelect = ({ value, onChange }: CategorySelectProps) => {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        Category
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none"
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
