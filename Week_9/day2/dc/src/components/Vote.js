import React from "react";
import Language from "./Language";

export default class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JS", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }
  incrementCount = (languageName) => {
    const langToUpdate = this.state.languages.find((lang) => lang.name === languageName);
    const newCount = {...langToUpdate, votes: langToUpdate.votes++};
    this.setState(newCount);
  }
  render() {
    return (
      <>
        <div className="languages">
          <h1> Vote for your favorite language</h1>
          {this.state.languages.map((lang, i) => (
            <Language 
            name={lang.name} 
            votes={lang.votes} 
            key={i} 
            incrementCount={() => this.incrementCount(lang.name)}
            />
          ))}
        </div>
      </>
    );
  }
}
