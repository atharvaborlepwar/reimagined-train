import React from "react";
import ReactDOM from "react-dom";
import Book from "./book";
import "./book.css";

function BookList() {
  return (
    <section className="bookList">
      <Book
        img="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL604_SR604,400_.jpg"
        auther="Héctor García"
        name="Ikigai: The Japanese secret to a long and happy......"
        price="₹361.00"
      />
      <Book
        img="https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg"
        auther="Morgan Housel"
        name="The Psychology of Money"
        price="₹349.00"
      />
      <Book
        img="https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg"
        auther="Ankur Warikoo"
        name="Do Epic Shit"
        price="₹260.00"
      />
      <Book
        img="https://images-eu.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL604_SR604,400_.jpg"
        auther="Héctor García"
        name="Rich Dad Poor Dad: What the Rich Teach Their.."
        price="₹302.00"
      />
      <Book
        img="https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL604_SR604,400_.jpg"
        auther="Gaur Gopal Das"
        name="Life's Amazing Secrets: How to Find Balance..."
        price="₹150.00"
      />
    </section>
  );
}

function Header() {
  return (
    <article>
      <header className="header">
        <h1>Best Selling Books</h1>
      </header>
    </article>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>Auther - Adii</p>
      <p>Book List By Amazon</p>
    </footer>
  )
}

function Index() {
  return (
    <section>
      <Header/>
      <BookList/>
      <Footer/>
    </section>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
