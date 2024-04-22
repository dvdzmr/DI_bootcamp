import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className='mycontainer'>
      <Carousel>
          <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" />
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" />
              <p className="legend">Legend 2</p>
          </div>
          <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" />
              <p className="legend">Legend 3</p>
          </div>
          <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" />
              <p className="legend">Legend 3</p>
          </div>
      </Carousel>
    </Container>
  );
}

export default App;
