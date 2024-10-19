"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";

function NavigationBar() {
  const linkClasses = "relative group hidden lg:block";
  const underlineClasses = "absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 ease-out group-hover:w-full group-hover:left-0";
  const [showNav, setShowNav] = useState(null);
  const mainNavBar = useRef(null);
  const navbarMobile = useRef(null);

  useEffect(() => {
    const mobileNav = navbarMobile.current;
    const mainNav = mainNavBar.current;

    const showMobileNav = gsap.fromTo(
      mobileNav,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "expo.inOut",
        paused: true,
        onStart: () => {
          mobileNav.style.display = "block";
          mainNav.style.display = "none";
        },
        onReverseComplete: () => {
          mainNav.style.display = "flex";
          mobileNav.style.display = "none";
        },
      }
    );

    if (showNav) {
      showMobileNav.play();
    } else if (showNav == false) {
      showMobileNav.seek(0.5);
      showMobileNav.reverse();
    }
  }, [showNav]);

  return (
    <div className="w-full sticky top-0 h-16 z-50">
      <nav
        ref={mainNavBar}
        style={{
          backdropFilter: "blur(18px) saturate(0%)",
          WebkitBackdropFilter: "blur(18px) saturate(0%)",
          backgroundColor: "rgba(18, 18, 18, 0.75)",
        }}
        className="flex lg:flex-row lg:justify-around md:justify-start w-screen sm:max-w-screen py-4 text-xl lg:px-80 px-5 sticky h-full z-50"
      >
        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setShowNav(true)}>
            <Image src="https://w16manik.blr1.cdn.digitaloceanspaces.com/elements/list.svg" width={34} height={34} alt="Menu" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={linkClasses}>
          <a href="./#home">HOME</a>
          <div className={underlineClasses}></div>
        </div>
        <div className={linkClasses}>
          <a href="./#about">PRODUCTS</a>
          <div className={underlineClasses}></div>
        </div>
        <div className={linkClasses}>
          <a href="./#projects">CONTACT US</a>
          <div className={underlineClasses}></div>
        </div>
        <div className={linkClasses}>
          <a href="#contact">LOG IN</a>
          <div className={underlineClasses}></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        ref={navbarMobile}
        style={{
            backdropFilter: "blur(18px) saturate(0%)",
            WebkitBackdropFilter: "blur(18px) saturate(0%)",
            backgroundColor: "rgba(18, 18, 18, 0.75)",
        }}
        className="hidden top-0 absolute z-50 h-screen w-10/12 rounded-r-lg p-5"
      >
        <button
          id="closeMobileNav"
          className="mb-5 text-black p-2 bg-white text-base"
          onClick={() => setShowNav(false)}
        >
          X
        </button>
        <div className="flex flex-col h-4/5 justify-around text-lg">
          <a href="./#home" className="w-fit p-3" onClick={() => setShowNav(false)}>
            HOME
          </a>
          <a className="w-fit p-3" href="./#about" onClick={() => setShowNav(false)}>
            ABOUT
          </a>
          <a className="w-fit p-3" href="./#projects" onClick={() => setShowNav(false)}>
            PROJECTS
          </a>
          <a className="w-fit p-3" href="#contact" onClick={() => setShowNav(false)}>
            CONTACT
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;