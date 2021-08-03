import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { SearchContainer, SearchInput, IconButton } from './SearchbarElements';

const Searchbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSearch = () => {
    setIsActive(!isActive);
  };
  return (
    <SearchContainer>
      <IconButton onClick={toggleSearch}>
        {isActive ? <AiOutlineClose size={18} /> : <AiOutlineSearch size={22} />}
      </IconButton>
      <SearchInput disabled />
    </SearchContainer>
  );
};

export default Searchbar;
