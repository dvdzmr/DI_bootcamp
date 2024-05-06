import React from "react"

export default class UserForm extends React.Component {
  constructor(props) {
    super(props)
  }

    handleSubmit = async (e) => {
        e.preventDefault();
        const messageInput = document.getElementById("search");
        const message = messageInput.value;
        const options = {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message})
        }
        const url = "http://localhost:3001/hello/world";
        try {
            const resJson = await fetch(url, options);
            const res = await resJson.json();
            console.log('res', res);
            this.props.setMessage(res);
            messageInput.value = "";
        } catch (err) {
            console.error(err);
        }
        
  }
  render(){
    return <>
        <form onSubmit={this.handleSubmit}> 
            <input type="text"   placeholder="Something" id="search"></input>
            <input type="submit" value="Submit"></input>
        </form>
    </>
  }
}