import './App.css'
import Hero from './components/hero section/Hero';
import Navbar from './components/navbar/Navbar';
import Parellex from './components/parellax/Parellex';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'> <Parellex type="Services" /> </section>
    <section > <Services/> </section>
    <section id='Portfolio'><Parellex type="Portfolio" /> </section>
    <Portfolio/>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
