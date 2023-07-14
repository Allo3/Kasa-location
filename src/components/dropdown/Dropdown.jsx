import React, { useState } from 'react';
import './Dropdown.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ content, className }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  let dropdownContent;
  if (typeof content === 'object' && content.text) {
    dropdownContent = <div className="menu-item">{content.text}</div>;
  } else if (Array.isArray(content)) {
    dropdownContent = content.map((option, index) => (
      <li className="menu-item" key={index}>
        <h3>{option.title}</h3>
        <p>{option.text}</p>
      </li>
    ));
  }
  

  return (
    <div className={`dropdown-container ${className}`}>
      <button className={`title-box ${open ? 'open' : ''}`} onClick={handleOpen}>
        {content.title}
        <span className="arrow">
          <FontAwesomeIcon icon={faAngleUp} />
        </span>
      </button>
      <ul className={`menu ${open ? 'open' : ''}`}>
        {dropdownContent}
      </ul>
    </div>
  );
};

export default Dropdown;
