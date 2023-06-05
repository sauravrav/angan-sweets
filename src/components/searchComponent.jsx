import React, { useState, useEffect, useRef } from 'react';

const SearchComponent = ({ items }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filterItems = (query) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setQuery(query);
    const filteredItems = filterItems(query);
    setSearchResults(filteredItems);
    setShowDropdown(true);
  };

  const handleItemClick = (itemName) => {
    console.log(itemName);
    setQuery(itemName);
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  return (
    <div className="search-component" ref={dropdownRef}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search food items"
        onClick={() => setShowDropdown(true)}
      />
      {showDropdown && searchResults.length > 0 && (
        <ul className="dropdown">
          {searchResults.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
