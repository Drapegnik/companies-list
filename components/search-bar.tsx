import { useCallback } from 'react';

interface Props {
  query: string;
  setQuery: (query: string) => void;
  placeholder: string;
}

export const SearchBar: React.FC<Props> = ({ query, setQuery, placeholder }) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  return (
    <input
      type="search"
      className="focus:outline-none w-full h-12 px-4 py-1 text-gray-800 border border-gray-400 rounded-md"
      value={query}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
