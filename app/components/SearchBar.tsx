"use client";

import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full sm:w-auto">
      <div className="relative w-full sm:w-[32rem]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
          🔍
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full h-10 pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:shadow-md transition-shadow duration-200 ease-in-out text-base outline-none text-black"
        />
      </div>
    </form>
  );
};

export default SearchBar;
