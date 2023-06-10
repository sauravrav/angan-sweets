import React from 'react'
const ButtonTags = ({ title, stat, setActiveButton }) => {
    const handleClick = () => {
      setActiveButton(title);
    };
  
    return ( <div className={`button-tag ${stat === 'active' ? 'active' : ''}`} onClick={handleClick}>
        {title}
    </div> );
}
 
export default ButtonTags;