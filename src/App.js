import React, { useRef } from "react";

// Components
import Navbar from "./components/Navbar";
import GallerySlide from "./components/GallerySlide";
import Cards from "./components/Cards";

// Styles
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Service.css";

// Images
import businessLogo from "./images/business-logo.png";
import landingBrush from "./images/landing-brush.png";
import blueBubble from "./images/blue-bubble-background.png";
import groupPic from "./images/group-pic.jpg";
import showcase1 from "./images/showcase-1.jpg";
import showcase2 from "./images/showcase-2.jpg";
import showcase3 from "./images/showcase-3.jpg";
import showcase4 from "./images/showcase-4.jpg";
import showcase5 from "./images/showcase-5.jpg";
import showcase7 from "./images/showcase-7.jpg";
import showcase8 from "./images/showcase-8.jpg";
import showcase9 from "./images/showcase-9.jpg";
import showcase10 from "./images/showcase-10.jpg";
import brushImage from "./images/speed-brush-window-cleaning.jpg";
import filterImage from "./images/filter-tank.webp";
import hoseImage from "./images/hose-window-cleaning.jpeg";
import brushIcon from "./images/brush-icon.png";
import windowIcon from "./images/window-icon.png";
import hoseIcon from "./images/hose-icon.png";

function App() {
  // Ref Section
  const home = useRef(null);
  const about = useRef(null);
  const service = useRef(null);
  const contact = useRef(null);

  const sectionTabs = [
    {name: "Home", ref: home},
    {name: "About", ref: about},
    {name: "Service", ref: service},
    {name: "Contact", ref: contact}
  ]

  const imageSlides = [
    {image: showcase5},
    {image: showcase1},
    {image: showcase3},
    {image: showcase2},
    {image: showcase7},
    {image: showcase4},
    {image: showcase9},
    {image: showcase8},
    {image: showcase10},
  ]

  const serviceCards = [
    {icon: brushIcon, 
      header: "Carbon Fiber Pole", 
      desc: "We got brushes that sprays the pure water and long enough to reach high windows.", 
      image: groupPic},
    {icon: windowIcon, 
      header: "Water Filter Tank", 
      desc: "We got a filter tank that makes water pure that leaves no stains when it gets dry.", 
      image: filterImage},
    {icon: hoseIcon, 
      header: "Reeling Hose", 
      desc: "We got long hose for us to clean large houses.", 
      image: hoseImage},
  ]

  return (
    <div className="App">
      <header>
        <div>
          <div className="img-contain"><img src={businessLogo} alt="802-logo"/></div>
          <Navbar tabs={sectionTabs} />
          <div className="btn-contain"><button>Book Now!</button></div>
        </div>
      </header>
      <section ref={home}>
        <div className="home-page">
          <h1>PURE WATER SPARKLY CLEANING WINDOW</h1>
          <h2>TELL US WHAT TO DO 802 IS HERE FOR YOU</h2>
          <p>
            We have the proper equipment to deliver an efficient and effective
            window cleaning. Since we are new business here in Saskatoon, SK we
            can go to your place to see what will be your quote. <span>Make an inquiry now!</span>
          </p>
          <div className="landing-img-contain">
            <img src={landingBrush} alt="brush"/>
          </div>
          <img src={blueBubble} className="bubble-left" alt="bubble-left"/>
          <img src={blueBubble} className="bubble-right" alt="bubble-right"/>
        </div>
      </section>
      <section ref={about}>
        <div className="about-page">
          <div className="picture-contain">
            <div className="left-box"></div>
            <img src={groupPic} alt="group-picture" />
            <div className="right-box"></div>
          </div>
          <div className="info-contain">
            <h2>A Little Thing About Us</h2>
            <p>
              We are a new business in Saskatoon, Saskatchewan. As
              for our current service we only do window cleaning. However,
              we have plans for the future to expand the business. The business founded
              by Thomas Joshua Domingo.
            </p>
            <h2>What Makes Us Different</h2>
            <p>
              Our window cleaning methods is special. We don't use any kind of chemical soap.
              We use a filter pure water to clean the glass pane and the frame that leaves no
              stains when it gets dry. Lastly, the cost of our service is not expensive.
            </p>
          </div>
        </div>
      </section>
      <section>
        <GallerySlide images={imageSlides} />
      </section>
      <section ref={service}>
        <div className="service-page">
          <h1>What Equipment We Have For Service</h1>
          <p>
            The picture cards below are the main equipment will be using for cleaning.
            But we have other equipments to help us complete our tasks.
          </p>
          <Cards boxes={serviceCards} />
          <p>
            You do not have to worry about what you need for your window cleaning. 
            Because we got you cover already with our premium equipments. For the quote,
            just call us and we can come to your place and give what your quote would be. <span>CALL US NOW!</span>
          </p>
        </div>
      </section>
      <section  ref={contact}>
        <div className="contact-page">

        </div>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
