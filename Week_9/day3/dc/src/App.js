import './App.css';
import React from "react"
import MyForm from './components/MyForm.components';
import { Summary } from './components/summary.component';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "Ben",
      lastName: "Mrejen",
      age: 36,
      gender: "male",
      destination: "japan",
      nutfree: true,
      lactosefree: true,
      vegan: false
    }
  }

  changeFirstName(newstate) {
    this.setState({firstName: newstate})
  }

  render() {
    return (
      <>
        <MyForm info={this.state}
        changeFirstName={(newName) => this.setState({ firstName: newName})}
        changeLastName={(newName) => this.setState({ lastName: newName})}
        changeAge={(newName) => this.setState({ age: newName})}
        changeGender={(newName) => this.setState({ gender: newName})}
        onChangeValue={(sex) => this.setState({gender : sex})}
        changeDestination={(country) => this.setState({destination : country})}
        changeNuts={(nut) => this.setState({nutfree: nut})}
        changeLactose={(lactose) => this.setState({lactosefree: lactose})}
        changeVegan={(animal) => this.setState({vegan: animal})}
        />
        <Summary info={this.state}/>
      </>
    );
  }
}

