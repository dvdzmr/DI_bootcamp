import React from "react"
// import  { capitalizeString } from "./helpers/capitalize"
export default class MyForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("final version:", this.props.info)
        const entries = Object.entries(this.props.info)
        const params = entries.join("&").replace(/,/g, "=");
        const url = "http://localhost/?" + params;
        fetch(url);
    }
    render() {
        console.log("firstname:", this.props.info.firstName)
        return <>
            <form id="myform" method="post" action="/" onSubmit={this.handleSubmit}>
                <input type="text" name="firstname" placeholder={this.props.info.firstName} onChange={(e) => this.props.changeFirstName(e.target.value)}/>
                <input type="text" name="lastname" placeholder={this.props.info.lastName}   onChange={(e) => this.props.changeLastName(e.target.value)}/>
                <input type="text" name="age" placeholder={this.props.info.age}             onChange={(e) => this.props.changeAge(e.target.value)}/>
            

                <div onChange={ (e) => this.props.onChangeValue(e.target.value)}>
                <label htmlFor="male">Male</label>
                <input type="radio" name="male" value="male" id="male" checked={this.props.info.gender === "male"}/>
                <label htmlFor="female">Female</label>
                <input type="radio" name="female" value="female" id="female" checked={this.props.info.gender === "female"}/>
                </div>

                <label htmlFor="destination">Destination:</label>
                <select name="destination" id="destination" value={this.props.info.destination} onChange={(e) => this.props.changeDestination(e.target.value)}>
                    <option value="thailand">Thailand</option>
                    <option value="brazil">Brazil</option>
                    <option value="japan">Japan</option>
                </select>

                <p>Dietary Restrictions</p>
                <label htmlFor="nuts">Nuts free</label>
                <input checked={this.props.info.nutfree} id="nuts" type="checkbox" name="nutsfree" value="Nuts free" onChange={(e) => this.props.changeNuts(e.target.checked)}/>
                <label htmlFor="lactose">Lactose free</label>
                <input checked={this.props.info.lactosefree} id="lactose" type="checkbox" name="lactosefree" value="Lactose free" onChange={(e) => this.props.changeLactose(e.target.checked)}/>
                <label htmlFor="vegan">Vegan</label>
                <input checked={this.props.info.vegan} id="vegan" type="checkbox" name="vegan" value="Vegan" onChange={(e) => this.props.changeVegan(e.target.checked)}/>

                <input type="submit" value="submit"></input>
            </form>
            </>
    }
}