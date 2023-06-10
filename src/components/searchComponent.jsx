import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import OrderModal from './order-modal';
const MySwal = withReactContent(Swal)

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
      item.title.toLowerCase().includes(query.toLowerCase())
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
              onClick={() =>    MySwal.fire({
                html: <OrderModal imgSrc={item.imgSrc} title={item.title} priceP={item.priceP} priceK={item.priceK} />,
                showConfirmButton: false,
                customClass: {
                  popup: 'order-modal',
                },
                width: 1000,
                showCloseButton: true,
              }).then(r => {})}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
