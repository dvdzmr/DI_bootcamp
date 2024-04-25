import React from "react"

const mycolors = ["red", "blue", "green", "yellow", "brown", "grey"]


export default class Color extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteColor: "red",
            show: true
        }
    }
    shouldComponentUpdate() {
        // return false;
        return true;
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.setState({ favoriteColor: "yellow"});
        }, 500);
        console.log("componentDidUpdate");
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: "yellow"});
        }, 500);
        console.log("componentDidMount");
    }

    render() {
        let mychild
        const deleteHeader = () => this.setState({show: false})
        const colorToggle = () => this.setState({favoriteColor: (mycolors[(Math.floor(Math.random() * mycolors.length))])})
        
        if (this.state.show) {
            mychild = <Child />;
          }
        
        return <>
        <h1>Color: {this.state.favoriteColor}</h1>
        <button onClick={colorToggle}>Click</button>


        {mychild}
        <button onClick={deleteHeader}>Delete</button>
        </>
    }
}


class Child extends React.Component{
    constructor(props) {
        super(props)

    }
    componentWillUnmount() {
        alert('The component is going to be unmounted');
      }
        
        render() {
            return <h1>Hello World</h1>
    }
}