"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function HeroPage() {
  // Define references for elements
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const mobileBarRef = useRef(null);
  const heroWomenRef = useRef(null);
  const heroTextBox2Ref = useRef(null);
  const logoRef = useRef(null);
  const appearLaterRef = useRef([]);

  useEffect(() => {
    // Show Navigation bar using fromTo
    let showMobileBar = gsap.fromTo(
      mobileBarRef.current,
      { x: '-20%', opacity: 0 }, // from
      {
        duration: 0.5,
        x: '0%', // to
        opacity: 1, // to
        ease: "expo.inOut",
        paused: true,
        onStart: () => { mobileBarRef.current.style.display = "block"; },
        onReverseComplete: () => { mobileBarRef.current.style.display = "none"; }
      }
    );

    if (menuButtonRef.current) {
      menuButtonRef.current.addEventListener("click", () => {
        showMobileBar.play();
      });
    }

    if (closeButtonRef.current) {
      closeButtonRef.current.addEventListener("click", () => {
        showMobileBar.reverse();
      });
    }

    // Animate HeroPage items using fromTo
    gsap.fromTo(
      heroWomenRef.current,
      { x: "-200%", opacity: 0 }, // from
      { x: "0%", opacity: 1, duration: 1, ease: "none" } // to
    );

    gsap.fromTo(
      heroTextBox2Ref.current,
      { x: "18%", opacity: 0 }, // from
      { x: "0%", opacity: 1, duration: 1, ease: "none" } // to
    );

    gsap.fromTo(
      logoRef.current,
      { y: "-20%", opacity: 0 }, // from
      { y: "0%", opacity: 1, duration: 1, ease: "none" } // to
    );

    gsap.fromTo(
      appearLaterRef.current,
      { y: "20%", opacity: 0 }, // from
      { y: "0%", opacity: 1, duration: 0.5, ease: "none", stagger: 0.2 } // to
    );
  }, []); // Empty array ensures this runs only once on mount

  return (
    <section id="home">
      <div className="wrapper">
        <div className="col1">
          <div className="box1">
            <Image
              ref={heroWomenRef}
              id="womenImage"
              src="https://w16manik.blr1.cdn.digitaloceanspaces.com/frxsh/assets/woman.jpg"
              alt="Woman"
              className="img"
              width={500}
              height={600}
              priority={true}
            />
          </div>
        </div>
        <div className="col2">
          <div className="box2" ref={logoRef} id="logo">
            <p>frxsh</p>
          </div>
          <div className="c2r1" ref={(el) => appearLaterRef.current.push(el)}>
            <div className="c2r1c1">
              <div className="box3">
                <Image
                  src="https://w16manik.blr1.cdn.digitaloceanspaces.com/frxsh/assets/sneakers.jpg"
                  alt="Sneakers"
                  className="img"
                  width={300}
                  height={400}
                />
              </div>
              <div className="box3">
                <Image
                  src="https://w16manik.blr1.cdn.digitaloceanspaces.com/frxsh/assets/funky.jpg"
                  alt="Funky"
                  className="img"
                  width={300}
                  height={400}
                />
              </div>
            </div>
            <div className="box31">
              <Image
                src="https://w16manik.blr1.cdn.digitaloceanspaces.com/frxsh/assets/men/coolman.jpg"
                alt="Cool Man"
                className="img"
                width={500}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="col3">
          <div className="box5">
            <Image
              ref={(el) => appearLaterRef.current.push(el)} // adding ref to appearLater class elements
              src="https://w16manik.blr1.cdn.digitaloceanspaces.com/frxsh/assets/men/blackman.jpg"
              alt="Black Man"
              className="img appearLater"
              width={500}
              height={600}
            />
          </div>
          <div className="box4" ref={heroTextBox2Ref} id="textbox2">
            <p>Begin</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;