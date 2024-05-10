import React from "react";
import {ErrorBoundary} from "./components/ErrorBoundary.component";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import { PostList } from "./components/PostList.component";
import { SocialMedia } from "./components/SocialMedia.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { SkillComponent } from "./components/Skills.component";
import { Experiences } from "./components/Experiences.component";

const routes = (
    <Routes>
        {/* <Route path="/" element={<PostList />} /> */}
        <Route path="/" element={<SocialMedia />} />
        <Route path="/post" element={<PostList/>} />
        <Route path="/profile" element={<ProfileScreen/>} />
        <Route path="/shop" element={<ShopScreen/>} />
        <Route path="/skill" element={<SkillComponent/>} />
        <Route path="/experiences" element={<Experiences/>} />
    </Routes>
)

export class App extends React.Component {
    handleClick = async () => {
        const url = "https://webhook.site/404aa240-16cd-4119-b150-32b2e30f5640";
        try {
            
            const jsonbody = {
                key1: 'myusername',
                email: 'mymail@gmail.com',
                name: 'Isaac',
                lastname: 'Doe',
                age: 27
            }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(jsonbody)
            };
            const res = await fetch(url, options);

        }catch(err){
            console.error(err);
        }
        

    }
    render() {
        return (
            <ErrorBoundary>
                <BrowserRouter>
                    <NavBar/>
                    <ErrorBoundary>{routes}</ErrorBoundary>
                    <p>Exercise 4:</p>
                    <button onClick={this.handleClick}>Post Data</button>

                </BrowserRouter>
            </ErrorBoundary>
        )
    }
}

function NavBar() {
    return (
        <>
            <h1>Welcome to React Router</h1>
            {/* <p><NavLink to="/">Posts</NavLink></p> */}
            <p><NavLink to="/">SOcial Media</NavLink></p>
            <p><NavLink to="/profile">Post</NavLink></p>
            <p><NavLink to="/profile">Profile</NavLink></p>
            <p><NavLink to="/skill">Skills</NavLink></p>
            <p><NavLink to="/experiences">Experiences</NavLink></p>
            <p><NavLink to="/shop">Shop</NavLink></p>
        </>
    );
}

// function HomeScreen() {
//     return <h1>Main</h1>
// }

function ShopScreen() {
    return <h1>Shop</h1>
}

function ProfileScreen() {
    return <h1>Profile</h1>
}