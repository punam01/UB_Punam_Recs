import './App.css';
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar';
import Trending from './components/Trending';
import InfScroll from './components/InfScroll'
function App() {
  return (
    <>
    <Navbar heading="Chintanika"></Navbar>
    <HeroBanner></HeroBanner>
    <Trending></Trending>
    <InfScroll></InfScroll>
    </>
  );
}

export default App;
