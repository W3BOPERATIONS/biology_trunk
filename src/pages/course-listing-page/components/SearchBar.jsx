import { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const popularSearches = [
    'Web Development',
    'Data Science',
    'Machine Learning',
    'React',
    'Python',
    'JavaScript',
    'UI/UX Design',
    'DevOps'
  ];

  useEffect(() => {
    if (searchQuery?.length > 0) {
      const filtered = popularSearches?.filter((search) =>
        search?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
      setSuggestions(filtered?.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
    setIsFocused(false);
  };

  return (
    <div className="relative max-w-2xl">
      <div
        className={`flex items-center gap-3 bg-card border-2 ${
          isFocused ? 'border-primary' : 'border-border'
        } rounded-lg px-4 py-3 transition-colors`}
      >
        <Icon name="Search" size={20} className="text-text-secondary" />
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-text-secondary"
          aria-label="Search courses"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-text-secondary hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <Icon name="X" size={18} />
          </button>
        )}
      </div>

      {isFocused && suggestions?.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-10">
          {suggestions?.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-3 hover:bg-muted transition-colors flex items-center gap-3 border-b border-border last:border-b-0"
            >
              <Icon name="TrendingUp" size={16} className="text-text-secondary" />
              <span className="text-foreground">{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;