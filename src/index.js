import React from 'react'
import ReactDOM from 'react-dom'
import Book from './book';
import './book.css'

function Index() {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}


ReactDOM.render(
  <React.StrictMode><Index/></React.StrictMode>,
  document.getElementById('root'));

