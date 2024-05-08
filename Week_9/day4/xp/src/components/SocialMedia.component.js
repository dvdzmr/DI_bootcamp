import React from "react";
import posts from "../data/data_three.json"

export class SocialMedia extends React.Component {


    render() {
        const media = posts.SocialMedias.map((media) => <li>{media}</li> )
        return media;
    }
}

