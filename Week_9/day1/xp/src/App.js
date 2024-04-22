import logo from './logo.svg';
import Element from './component/Const'
import UserFavoriteAnimals from './component/UserFavoriteAnimals'
import Exercise from './component/Exercise3';
import './App.css';


function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <Element/>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favorites={user.favAnimals}/>
        <Exercise/>
      </header>
    </div>
  );
}

export default App;
