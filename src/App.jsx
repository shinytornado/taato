import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import People from "./components/People/People";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='BETTER MENTAL HEALTH FOR EVERYONE' title='We Provide Awarness On'/>
        <Programs/>
        <About/>
        <Title subTitle='Inspiration' title='People That Encourage Mental Health'/>
        <People/>
        <Title subTitle='Testimonials' title='What our users say about Mental Health'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;