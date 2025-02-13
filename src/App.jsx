import './App.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Corsur from './components/cursor/Corsur';
import Hero from './components/hero section/Hero';
import Navbar from './components/navbar/Navbar';
import Parellex from './components/parellax/Parellex';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
const App = () => {
  return <div>
    <Corsur/>

    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'> <Parellex type="Services" /> </section>
    <section > <Services/> </section>
    <section id='Portfolio'><Parellex type="Portfolio" /> </section>
    <Portfolio/>
    <section id='About' > <About/> </section>
    <section id='Contact'>
      <Contact/>
    </section>
  </div>;
};

export default App;
