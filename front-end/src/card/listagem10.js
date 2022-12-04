import React from "react";
export default function Card(props) {
    console.log(props)
    return (
        <a className="collection-item">{props}</a>
    );
}