import React from "react";
import './book.css';

export default function Book(props) {
    return <article className="book">
        <Img img={props.img} title={props.name}></Img>
        <Title name={props.name}></Title>
        <Auther auther={props.auther}/>
        <Price price={props.price}/>
    </article>
}

function Img(props) {
  return (
    <img
      src={props.img}
      alt={props.title}
    />
  );
}

function Auther(props) {
    return <h4>{props.auther}</h4>
}

function Title(props) {
    return <h2>{props.name}</h2>
}

function Price(props) {
    return <h3>{props.price}</h3>
}
