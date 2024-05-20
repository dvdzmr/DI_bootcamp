import {useEffect, useState, setState} from 'react'
import Card from 'react-bootstrap/Card';
import './App.css'


// Exercise 1
// this is a vite react project made with webstorm
// with terminal you could also do it with : npm create vite@latest & npm install

// Exercise 2
interface MyGreetingProps {
    name: string;
}

function Greeting({name}: MyGreetingProps) {
    return (
        <h1>{name}</h1>
    );
}

// Exercise 3

function ExerciseThree() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <button onClick={() => setCounter(counter - 1)}>Decrease</button>
            <h2>{counter}</h2>
        </>
    )
}

// Exercise 4

interface UserCardProps {
    username: string;
    age: number;
}

function UserCard(props?: UserCardProps) {

    const username = props?.username;
    const age = props?.age;
    let noProps = false;

    if (typeof username === 'undefined' || typeof age === 'undefined') {
        noProps = true;
    }

    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title> {!noProps ? `${username}` : "User"}  </Card.Title>
                <Card.Text>
                    Hello and welcome.
                    {!noProps ? `This users age is ${age}` : null}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


// Exercise 5

interface Person {
    order: number;
    name: string;
}

const GetEffects: React.FC = () => {
    const [person, setPerson] = useState<Person[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const result: Person[] = await response.json();
                setPerson(result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>People</h1>
            {loading ? (<p>getting data</p>) : (
                person.map((user) => (
                    <p key={user.order}>
                        {user.order}. {user.name}
                    </p>
                ))
            )}
        </div>
    );
};




// Daily challenge

type Todo = {
    id: number;
    text: string;
};

type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>): React.ReactElement {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}

// Main TodoApp component
const MyTodoList: React.FC = () => {
    const [count , setCount] = useState(3)
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: "Get a job" },
        { id: 2, text: "Buy a house" },
    ]);

    const newTodo = () => {
        const newTodo: Todo = { id: count, text: `New Todo random text` };
        setCount(count + 1);
        setTodos([...todos, newTodo]);
    };

    // Render the app
    return (
        <div>
            <h2>My List:</h2>
            <List<Todo>
                items={todos}
                renderItem={(todo) => (
                    <span>
            {todo.id}: {todo.text}
          </span>
                )}
            />
            <button onClick={newTodo}>Add new Todo</button>
        </div>
    );
};














export default function App() {
    const userName = "David";

    return (
        <>
            <Greeting name={userName}/>
            <ExerciseThree/>
            <UserCard/>
            <UserCard username={userName} age={25}/>
            <GetEffects></GetEffects>
            <MyTodoList/>
        </>
    )
}
