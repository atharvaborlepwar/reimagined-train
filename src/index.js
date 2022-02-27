import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import BookList from "./book/bookList.Mcmp";
import { Header } from "./core/header.c.cmp";
import Footer from "./core/footer.c.cmp"



function Main() {
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
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
