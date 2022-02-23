import React from "react";
import './book.css';

export default function Book() {
    return <article className="book">
        <Img></Img>
        <Title></Title>
        <Auther/>
        <Price/>
    </article>
}

function Img() {
  return (
    <img
      src="https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg"
      alt=""
    />
  );
}

function Auther() {
    return <h4>Ankur Warikoo</h4>
}

function Title() {
    return <h2>DO EPIC SHIT</h2>
}

function Price() {
    return <h3>₹260.00</h3>
}
