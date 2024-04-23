import React from "react"

const mycolors = ["red", "blue", "green", "yellow", "brown", "grey"]


export default class Color extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteColor: "red"
        }
    }

    render() {
        
        const colorToggle = () => this.setState({favoriteColor: (mycolors[(Math.floor(Math.random() * mycolors.length))])})
        return <>
        <h1>Color: {this.state.favoriteColor}</h1>
        <button onClick={colorToggle}>Click</button>
        </>
    }
}