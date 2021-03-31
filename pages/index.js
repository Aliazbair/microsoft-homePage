import Carbon from "../components/Carbon";
import Cards from "../components/Cards";
import Cards2 from "../components/Cards2";
import Follow from "../components/Follow";
import Footer from "../components/Footer";
import Links from "../components/Links";
import Navbar from "../components/Navbar";
import Xbox from "../components/Xbox";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <header className="">
        <h2>Surface Deals</h2>
        <p>Select Surfaces are on sale now - save while supplies last</p>
        <a href="#" className="">
          Shop now <i className="fas fa-chevron-right"></i>
        </a>
      </header>
      <Cards/>
      <Xbox/>
      <Cards2 />
      <Carbon/>
      <Follow/>
      <Links/>
      <Footer/>
    </div>
  )
}


