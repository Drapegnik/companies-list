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
    <div>
      <input type="text" value={query} onChange={handleChange} placeholder={placeholder} />
    </div>
  );
};
