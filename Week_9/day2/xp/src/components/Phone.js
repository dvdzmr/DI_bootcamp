import React from "react"



const mycolors = ["red", "blue", "green", "yellow", "brown", "grey"]


export default class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        }
    }


    render() {
        
        const clickMe = () => this.setState({color: (mycolors[(Math.floor(Math.random() * mycolors.length))])})
        return <>
        <h1>My phone is a {this.state.brand}</h1>
        <p>It is a {this.state.color} {this.state.model} from {this.state.year}</p>
        <button onClick={clickMe}>Click</button>
        </>
    }
}