import './App.css';
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar';
import Trending from './components/Trending';
import InfScroll from './components/InfScroll'
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar heading="Chintanika"></Navbar>
    <HeroBanner></HeroBanner>
    <Trending></Trending>
    <InfScroll></InfScroll>
    <Footer></Footer>
    </>
  );
}

export default App;
