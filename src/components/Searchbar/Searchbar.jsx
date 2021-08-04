import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchContainer, IconButton } from './SearchbarElements';

const Searchbar = () => {
  return (
    <SearchContainer>
      <IconButton>
       <AiOutlineSearch size={22} />
      </IconButton>
    </SearchContainer>
  );
};

export default Searchbar;
