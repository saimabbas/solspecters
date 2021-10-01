import React, { useEffect } from "react";
import "./App.css";
import { FaTwitterSquare, FaDiscord } from "react-icons/fa";
import CharacterBox from "./components/CharacterBox";
import Banner from "./assets/banner.png";
import Pic0 from "./assets/0.png";
import Pic1 from "./assets/1.png";
import Pic2 from "./assets/2.png";
import Pic3 from "./assets/3.png";
import Pic4 from "./assets/4.png";
import Pic5 from "./assets/5.png";
import Pic6 from "./assets/6.png";
import Pic7 from "./assets/7.png";

import { Power4 } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import $ from "jquery";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }, []);

  /* Anchoring Funtions */
  const moveTo2 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo3 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 60,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo4 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 60,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo5 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 60,
      },
      ease: Power4.easeInOut,
    });
  };

  /* Custom FAQ sliding */

  const q1 = () => {
    $(".a").slideUp(350);
    $(".a1").slideToggle(350);
  };
  const q2 = () => {
    $(".a").slideUp(350);
    $(".a2").slideToggle(350);
  };
  const q3 = () => {
    $(".a").slideUp(350);
    $(".a3").slideToggle(350);
  };
  const q4 = () => {
    $(".a").slideUp(350);
    $(".a4").slideToggle(350);
  };

  /* Character Display Functions */

  const displayCh1 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch1").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB1").addClass("activeCHB");
  };
  const displayCh2 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch2").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB2").addClass("activeCHB");
  };
  const displayCh3 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch3").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB3").addClass("activeCHB");
  };
  const displayCh4 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch4").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB4").addClass("activeCHB");
  };
  const displayCh5 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch5").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB5").addClass("activeCHB");
  };
  const displayCh6 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch6").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB6").addClass("activeCHB");
  };
  const displayCh7 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch7").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB7").addClass("activeCHB");
  };
  const displayCh8 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch8").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB8").addClass("activeCHB");
  };
  const displayCh9 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch9").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB9").addClass("activeCHB");
  };
  const displayCh10 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch10").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB10").addClass("activeCHB");
  };
  const displayCh11 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch11").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB11").addClass("activeCHB");
  };
  const displayCh12 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch12").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB12").addClass("activeCHB");
  };
  const displayCh13 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch13").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB13").addClass("activeCHB");
  };
  const displayCh14 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch14").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB14").addClass("activeCHB");
  };
  const displayCh15 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch15").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB15").addClass("activeCHB");
  };
  const displayCh16 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch16").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB16").addClass("activeCHB");
  };
  return (
    <div className="body">
      {/* Sticky Header */}
      <div className="header">
        <div className="box">
          <div className="header-content">
            <div className="header-left">
              <a onClick={moveTo2}>SpecDex</a>
              <a onClick={moveTo3}>Mint</a>
              <a onClick={moveTo4}>FAQ</a>
              <a onClick={moveTo5}>Roadmap</a>
            </div>
            <div className="header-right">
              <a href="">
                <FaTwitterSquare />
              </a>
              <a href="">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <img src={Banner} alt="" />
      </div>

      {/* SpecDex Section */}
      <div className="specdex section" id="section2">
        <div className="box">
          <div className="sp-content">
            <div className="sp-left">
              <img
                onClick={displayCh1}
                className="ch ch1 activeCh"
                src={Pic0}
                alt=""
              />
              <img onClick={displayCh2} className="ch ch2" src={Pic1} alt="" />
              <img onClick={displayCh3} className="ch ch3" src={Pic2} alt="" />
              <img onClick={displayCh4} className="ch ch4" src={Pic3} alt="" />
              <img onClick={displayCh5} className="ch ch5" src={Pic4} alt="" />
              <img onClick={displayCh6} className="ch ch6" src={Pic5} alt="" />
              <img onClick={displayCh7} className="ch ch7" src={Pic6} alt="" />
              <img onClick={displayCh8} className="ch ch8" src={Pic7} alt="" />
              <img onClick={displayCh9} className="ch ch9" src={Pic0} alt="" />
              <img
                onClick={displayCh10}
                className="ch ch10"
                src={Pic1}
                alt=""
              />
              <img
                onClick={displayCh11}
                className="ch ch11"
                src={Pic2}
                alt=""
              />
              <img
                onClick={displayCh12}
                className="ch ch12"
                src={Pic3}
                alt=""
              />
              <img
                onClick={displayCh13}
                className="ch ch13"
                src={Pic4}
                alt=""
              />
              <img
                onClick={displayCh14}
                className="ch ch14"
                src={Pic5}
                alt=""
              />
              <img
                onClick={displayCh15}
                className="ch ch15"
                src={Pic6}
                alt=""
              />
              <img
                onClick={displayCh16}
                className="ch ch16"
                src={Pic7}
                alt=""
              />
            </div>
            <div className="sp-right">
              <CharacterBox
                className="CHB CHB1 activeCHB"
                img={Pic0}
                name="Character 1"
                description="This is the description for the character 1."
              />
              <CharacterBox
                className="CHB CHB2"
                img={Pic1}
                name="Character 2"
                description="This is the description for the character 2."
              />
              <CharacterBox
                className="CHB CHB3"
                img={Pic2}
                name="Character 3"
                description="This is the description for the character 3."
              />
              <CharacterBox
                className="CHB CHB4"
                img={Pic3}
                name="Character 4"
                description="This is the description for the character 4."
              />
              <CharacterBox
                className="CHB CHB5"
                img={Pic4}
                name="Character 5"
                description="This is the description for the character 5."
              />
              <CharacterBox
                className="CHB CHB6"
                img={Pic5}
                name="Character 6"
                description="This is the description for the character 6."
              />
              <CharacterBox
                className="CHB CHB7"
                img={Pic6}
                name="Character 7"
                description="This is the description for the character 7."
              />
              <CharacterBox
                className="CHB CHB8"
                img={Pic7}
                name="Character 8"
                description="This is the description for the character 8."
              />
              <CharacterBox
                className="CHB CHB9"
                img={Pic0}
                name="Character 9"
                description="This is the description for the character 9."
              />
              <CharacterBox
                className="CHB CHB10"
                img={Pic1}
                name="Character 10"
                description="This is the description for the character 10."
              />
              <CharacterBox
                className="CHB CHB11"
                img={Pic2}
                name="Character 11"
                description="This is the description for the character 11."
              />
              <CharacterBox
                className="CHB CHB12"
                img={Pic3}
                name="Character 12"
                description="This is the description for the character 12."
              />
              <CharacterBox
                className="CHB CHB13"
                img={Pic4}
                name="Character 13"
                description="This is the description for the character 13."
              />
              <CharacterBox
                className="CHB CHB14"
                img={Pic5}
                name="Character 14"
                description="This is the description for the character 14."
              />
              <CharacterBox
                className="CHB CHB15"
                img={Pic6}
                name="Character 15"
                description="This is the description for the character 15."
              />
              <CharacterBox
                className="CHB CHB16"
                img={Pic7}
                name="Character 16"
                description="This is the description for the character 16."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mint Section */}
      <div className="mint section" id="section3">
        <div className="box">
          <div className="mint-content">
            <h1>Specters Sold: 0/7,850</h1>
            <h1>Mint Price: 0.75 SOL</h1>
            <button>MINT NOW</button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq section" id="section4">
        <div className="box">
          <div className="faq-content">
            <h1>SolSpecters FAQ's</h1>
            <div className="faq-grid">
              <div className="faq-grid-left">
                <div className="faq-box">
                  <div className="faq-q q1 q" onClick={q1}>
                    Q . Lorem, ipsum dolor sit amet cons icing elit. Eligendi
                    eaque, repud Eligendi eaque, repud
                  </div>
                  <div className="faq-a a1 a">
                    A. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minima tempore voluptatem eos quos nam architecto
                    perspiciatis, asperiores repudiandae? Unde tempora
                    dignissimos vitae minus architecto, quod eligendi sequi, ut
                    molestias consequatur saepe temporibus quo eos blanditiis
                    autem error eveniet perspiciatis illum possimus, ullam amet?
                    Atque delectus consequatur nulla, repellat rerum neque.
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-q q2 q" onClick={q2}>
                    Q . Lorem, ipsum dolor t. Eligendi eaque, repud Eligendi
                    eaque, repud repu pud Eligendi eaque, repud eaque, repud
                  </div>
                  <div className="faq-a a2 a">
                    A. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minima tempore voluptatem eos quos nam architecto
                    perspiciatis, asperiores repudiandae? Unde tempora
                    dignissimos vitae minus architecto, quod eligendi sequi, ut
                    molestias consequatur saepe temporibus quo eos blanditiis
                    autem error eveniet perspiciatis illum possimus, ullam amet?
                    Atque delectus consequatur nulla, repellat rerum neque.
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-q q3 q" onClick={q3}>
                    Q . Lorem, ipsum dolor sit amet cons ic . Eligendi eaque,
                    repud Eligendi eaque, repud
                  </div>
                  <div className="faq-a a3 a">
                    A. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minima tempore voluptatem eos quos nam architecto
                    perspiciatis, asperiores repudiandae? Unde tempora
                    dignissimos vitae minus architecto, quod eligendi sequi, ut
                    molestias consequatur saepe temporibus quo eos blanditiis
                    autem error eveniet perspiciatis illum possimus, ullam amet?
                    Atque delectus consequatur nulla, repellat rerum neque.
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-q q4 q" onClick={q4}>
                    Q . Lorem, ipsum dolor sit amet cons icing elit. Eligendi
                    eaque, repud Eligendi eaque, repud
                  </div>
                  <div className="faq-a a4 a">
                    A. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minima tempore voluptatem eos quos nam architecto
                    perspiciatis, asperiores repudiandae? Unde tempora
                    dignissimos vitae minus architecto, quod eligendi sequi, ut
                    molestias consequatur saepe temporibus quo eos blanditiis
                    autem error eveniet perspiciatis illum possimus, ullam amet?
                    Atque delectus consequatur nulla, repellat rerum neque.
                  </div>
                </div>
              </div>
              <div className="faq-grid-right">
                <img src={Pic1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="roadmap section" id="section5">
        <div className="box">
          <div className="roadmap-content">
            <h1>Roadmap</h1>
            <div className="roadmap-box">
              <h2>1. PRE-LAUNCH</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                expedita perspiciatis dolor tempore? Modi, a? Perspiciatis
                cupiditate repellat suscipit beatae!
              </p>
            </div>
            <div className="roadmap-box">
              <h2>2. LAUNCH</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                expedita perspiciatis dolor tempore? Modi, a? Perspiciatis
                cupiditate repellat suscipit beatae!
              </p>
            </div>
            <div className="roadmap-box">
              <h2>3. 25% OF THE TOTAL BUYS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                expedita perspiciatis dolor tempore? Modi, a? Perspiciatis
                cupiditate repellat suscipit beatae!
              </p>
            </div>
            <div className="roadmap-box">
              <h2>4. 50% OF THE TOTAL BUYS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                expedita perspiciatis dolor tempore? Modi, a? Perspiciatis
                cupiditate repellat suscipit beatae!
              </p>
            </div>
            <div className="roadmap-box">
              <h2>5. 75% OF THE TOTAL BUYS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                expedita perspiciatis dolor tempore? Modi, a? Perspiciatis
                cupiditate repellat suscipit beatae!
              </p>
            </div>
            <div className="roadmap-box">
              <h2>6. 100% OF THE TOTAL BUYS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                expedita perspiciatis dolor tempore? Modi, a? Perspiciatis
                cupiditate repellat suscipit beatae!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="box">
        <div className="footer">
          <span>
            <a href="">
              <FaTwitterSquare />
            </a>
            <a href="">
              <FaDiscord />
            </a>
          </span>
          <p>Copyright © 2021 SolSpecters. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
