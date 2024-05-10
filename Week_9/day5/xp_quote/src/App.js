import React, { Component } from 'react'
import "./App.css"
import { quotes } from "./data/quotes"
// import { useState, useEffect } from 'react'


function randomColor() {
  const colors = [
    'lightblue', 'black', 'azure', 'purple', 'cyan', 
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {currentIndex : 0}
  }

  componentDidMount() {
    const randomQuote = quotes[this.state.currentIndex];
    this.setState({ quote: randomQuote.quote, author: randomQuote.author})
  }
  handleCLick = () => {
    console.log("current state: ", this.state);
    this.setState({ currentIndex: this.state.currentIndex + 1});
    console.log("current state: ", this.state);
    const randomQuote = quotes[this.state.currentIndex];
    this.setState({quote: randomQuote.quote, author: randomQuote.author})
    document.body.style.backgroundColor = randomColor();
  }
  render() {
    return (
      <div className="box">
        <h1 id="quote">{this.state.quote}</h1>
        <h2>{this.state.author}</h2>
        <button onClick={this.handleCLick}>New Quote</button>
      </div>
    )
  }
}
