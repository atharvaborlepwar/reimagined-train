import React from "react";
import './bookStyle.css';
import Img from './components/Img.cmp'
import Title from './components/Title.cmp'
import Auther from './components/Auther.cmp'
import Price from './components/Price.cmp'


export default function Book(props) {
    return <section className="book">
        <Img img={props.img} title={props.name}></Img>
        <Title name={props.name}></Title>
        <Auther auther={props.auther}/>
        <Price price={props.price}/>
    </section>
}







