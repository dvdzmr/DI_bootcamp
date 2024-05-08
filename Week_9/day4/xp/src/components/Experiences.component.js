import React from "react";
import posts from "../data/data_three.json"

export class Experiences extends React.Component {


    render() {
        const experiences = posts.Experiences.map((xp) => {
            return <>
                <p>{xp.companyName}</p>
                <img src={xp.logo} width={100} height={100} alt="experience logo"/>
                {xp.roles.map((role) => (
                    <>
                        <p>{role.title}</p>
                        <span>{role.startDate}</span>, <span>{role.location}</span>
                        <p>{role.description}</p>
                    </>
                ))}
            </>
        });
        return experiences;
    }
}
