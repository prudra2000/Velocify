import React, { useState } from "react";
import { Input } from "./input";

const SearchBar = ({ onSearch, id }: { onSearch: (query: string) => void, id: string }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search documentation..."
      className="w-full"
      variant="transparent"
      id={id}
    />
  );
};

export default SearchBar;