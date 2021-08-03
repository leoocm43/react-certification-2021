import React from 'react';
import {Container} from 'react-bootstrap'
import './Layout.styles.css';

function Layout({ children }) {
  return <Container fluid>{children}</Container>;
}

export default Layout;
