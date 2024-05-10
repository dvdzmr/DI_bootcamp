import React from 'react';

export default class App extends React.Component{
   constructor(props){
    super(props)
    this.state = {
      numOne : 0,
      numTwo : 0,
      result : 0
    };
   }

  render(){

    return (
        <div className='container'>
            <h1>Lets do math</h1>
            <div>
                <input type='number' value={this.props.numOne} onChange={e => this.setState(() => ({numOne : parseInt(e.target.value)}))} placeholder='Enter a number' id='first'/>
                <input type='number' value={this.props.numTwo} onChange={e => this.setState(() => ({numTwo : parseInt(e.target.value)}))} placeholder='And another' id='second'/>
            </div>
            <button onClick={e => this.setState(() => ({result : (this.state.numOne + this.state.numTwo)}))}>Do math</button>
            <p>{this.state.result}</p>
        </div>
    );
  }
    
}
