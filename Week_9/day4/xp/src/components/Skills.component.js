import React from "react";
import posts from "../data/data_three.json"

export class SkillComponent extends React.Component {

    render() {
        return posts.Skills.map((skill) => {
            const area = skill.Area;
            const skillSet = skill.SkillSet;
            return <>
                <p>{area}</p>
                {skillSet.map((set) => (
                    <li>{set.Name}</li>
                ))}
            </>
        });

    }
}

