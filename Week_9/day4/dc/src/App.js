import React from "react"
import UserForm from "./components/UserForm.component"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: null };
  }

  async componentDidMount() {
    const url = "http://localhost:3001/api/hello"
    try {
      const resText = await fetch(url);
      const res = await resText.text();
      this.setState({message : res})
      console.log("res:", res);
    } catch(err) {
      console.error(err);
    }
  }
  render() {
    return <>
      <UserForm setMessage={ message => this.setState(message) }/>
      <div>Message: {this.state.message}</div>
    </>
  }
}