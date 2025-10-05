'use client';

import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';

const SearchBar = () => {
  const placeholders = [
    'Attention is all you need',
    'Research papers on GPT-3',
    'How to build a search engine',
    'How to build a recommendation system',
    'What is the best way to learn machine learning',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Intentionally left blank; parent handles search execution
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
};

export default SearchBar;
