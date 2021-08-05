import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  width: 360px;
  height: 48px;
  background: #f2f2f2;
  border-radius: 0;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-left: 5px;
  transition: all 0.3s ease;
`;

export const SearchInput = styled.input`
  padding-left: 48px;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  border: 1px solid transparent;

  &.focus {
    border-color: rgba(0 0, 0, 0.3);
  }
`;

export const Input = styled.input`
  font-size: 1.5rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: none;
  border: 1px solid grey;
  border-radius: 0.5rem;
`;

export const IconButton = styled.button`
  position: relative;
  height: 36px;
  width: 36px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background: none;

  &.hover {
    color: white;
    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background: #000;
    transition: 0.2s ease;
    transform: scale(0.6);
    opacity: 0;
  }
`;
