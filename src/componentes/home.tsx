import { Component } from "react";

type props = {
    tema: string
}

export default class Home extends Component<props> {
    render() {
        return (
            <div className="collection">
                <p>Home</p>
            </div>
        )
    }
}