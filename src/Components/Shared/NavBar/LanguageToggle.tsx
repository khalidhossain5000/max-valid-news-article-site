import { useState } from "react";

 type Language = "EN" | "BN";

interface LanguageToggleProps {
  defaultLang?: Language;
  onChange?: (lang: Language) => void;
}

export default function LanguageToggle({
  defaultLang = "EN",
  onChange,
}: LanguageToggleProps) {
  const [lang, setLang] = useState<Language>(defaultLang);

  const handleSelect = (value: Language) => {
    setLang(value);
    onChange?.(value);
  };

  const languages: Language[] = ["EN", "BN"];

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-card p-1 shadow-sm">
      {languages.map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => handleSelect(value)}
          aria-pressed={lang === value}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-200 cursor-pointer ${
            lang === value
              ? "bg-primary text-white"
              : "text-text-primary hover:bg-gray-50"
          }`}
        >
          {value}
        </button>
      ))}
    </div>
  );
}