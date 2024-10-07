// components/CustomSelect/CustomSelect.js
import React, { useState, useRef, useEffect } from 'react';
import './CustomSelect.css';

function CustomSelect({ options, value, onChange, placeholder, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`custom-select-container ${className}`} ref={selectRef}>
      <div className="custom-select-display" onClick={handleToggleDropdown}>
        {value || placeholder}
        <span className="custom-select-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="custom-select-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="custom-select-option"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
