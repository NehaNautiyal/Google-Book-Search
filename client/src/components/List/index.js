import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return (
  <li><div className="list-group-item" id={props.id}>
    <a href={props.link}>{props.title}</a> by {props.author} <button onClick={props.saveBook} id={props.id}>SAVE</button></div>
  <div><img src={props.image} alt={props.title}/>Descripton: {props.description}</div>
  </li>);
}
