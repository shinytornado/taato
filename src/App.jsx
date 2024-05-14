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
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Brain from "./components/Brain/Brain";
import Body from "./components/Body/Body";
import Heart from "./components/Heart/Heart";

const App = () => {

  const [playState, setPlayState] = React.useState(false)
  const [playSta, setPlay] = React.useState(false)
  const [playBod, setBod] = React.useState(false)
  const [playHea, setHea] = React.useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='BETTER MENTAL HEALTH FOR EVERYONE' title='We Provide Awarness On'/>
        <Programs setPlay={setPlay} setBod={setBod} setHea={setHea}/>
        <About setPlayState={setPlayState} />
        <Title subTitle='Inspiration' title='People That Encourage Mental Health'/>
        <People/>
        <Title subTitle='Testimonials' title='What our users say about Mental Health'/>
        <Testimonials/>
        <Brain playSta={playSta} setPlay={setPlay}/>
        <Body playBod={playBod} setBod={setBod}/>
        <Heart playHea={playHea} setHea={setHea}/>
        <Title subTitle='Contact Us' title='Write Below How Do You Deal With Mental Health?'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App;