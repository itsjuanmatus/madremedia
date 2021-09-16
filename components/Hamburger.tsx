import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import austin from ".././public/images/austin.webp";
import newyork from ".././public/images/newyork.webp";
import miami from ".././public/images/miami.webp";


let cities = [
  { name: "Miami", image: miami },
];


const Hamburger = ({ state }: any) => {
  
  // vars for our animaed dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //close our menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open our menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  const staggerReveal = (node1: any, node2: any) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: { amount: 0.1 },
    });
  };
  const staggerText = (node1: any, node2: any, node3: any) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: { amount: 0.3 },
    });
  };
  const fadeInUp = (node: any) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  const handleCity = (city: any, target: any) => {
    gsap.to(target, {
      duration: 0,
      
      background: `url(${city}) center center`
    });
    gsap.to(target, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut"
    });
    gsap.from(target, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top"
    });
  };

  const handleCityReturn = (target: any) => {
    gsap.to(target, {
      duration: 0,
      skewY: 0,
    });
    gsap.to(target, {
      duration: 0.4,
      opacity: 0,
      skewY: 0,
    });
  };

  const handleHover = (e: any) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power1.inOut",
    });
  };

  // Hover off the link
  const handleHoverExit = (e: any) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power1.inOut",
    });
  };

  return (
    <div ref={(el: any) => (menu = el)} className="hamburger-menu ">
      <div
        ref={(el: any) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el: any) => (revealMenu = el)} className="menu-layer">
        <div
          ref={(el: any) => (cityBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="  ">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li
                    ref={(el: any) => (line1 = el)}
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  >
                    <Link href="/opportunities">Opportunities</Link>
                  </li>
                  <li
                    ref={(el: any) => (line2 = el)}
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  >
                    <Link href="/solutions">Solutions</Link>
                  </li>
                  <li
                    ref={(el: any) => (line3 = el)}
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  >
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el: any) => (info = el)} className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  provident quod sint ratione aspernatur, vel quibusdam maiores
                  dolor doloribus dignissimos sed deserunt neque officiis
                  quaerat sequi, nihil quasi rerum velit.
                </p>
              </div>
              <div className="locations">
                Locations:
                {cities.map((el) => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}
                  >
                    {el.name}
                  </span>
                ))}

                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
