import React from "react";
export default function Card(props) {
    return (
        <a className="collection-item">{props.nome}</a>
    );
}