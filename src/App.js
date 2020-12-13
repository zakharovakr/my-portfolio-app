import React from 'react';
import './css/app.css';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


class App extends React.Component {
  state = {

  }

  componentDidMount=()=>{
    AOS.init({
      duration: 400,
    });
}

render() {
  return (
    <div className="app">
      <Hero></Hero>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
}

export default App;
