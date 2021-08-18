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
  width: 50%;
  padding: 1rem 1.5rem;
  background: none;
  border: 1px solid grey;
  border-radius: 0.5rem;
  margin: 1rem 0 1rem 0;
`;

export const IconButton = styled.button`
  background-color: #880808;
  width: 80px;
  height: 80px;
  margin-top: 1rem;
`;
