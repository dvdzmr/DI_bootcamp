import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Main from './components/main';
import Search from './components/search';
import Category from './components/category';
import './css/App.css';

export default function App() {
  return (
      <Container>
            <Router>
              <Routes>
                <Route path="/" element={<Main />} />
                  <Route path="/category/:category" element={<Main><Search /><Category /></Main>} />
                  <Route path="/category" element={<Main><Search /></Main>} />
              </Routes>
            </Router>
      </Container>
  );
}
