import React from 'react'
import Navbar from "../components/Navbar";
import BodyInit from "../components/BodyInit";
import FooterIdioms from "../components/FooterIdioms";
import "../styles/styles.css";

export default function Home() {
  return (
    <>
    <Navbar text={"minimentes"}></Navbar>
    <BodyInit></BodyInit>
    <FooterIdioms></FooterIdioms>
  </>
  )
}
