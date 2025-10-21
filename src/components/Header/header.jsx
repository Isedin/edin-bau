import { useRef } from "react";
import "./Header.css";
import { Link } from "react-scroll";
// import { Baustellenplanung } from "../../assets";
import Achievement from "../Achievement/achievement";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const timeline = gsap.timeline({ delay: 1, stagger: 1 });
      timeline.fromTo(
        ".image_container",
        { scale: 0.5, opacity: 0, y: 0 },
        { scale: 1, ease: "sine.in", opacity: 1, y: 0 }
      );
      timeline.from(".title", { opacity: 0, y: -30 });
      timeline.from(".description", { opacity: 0, y: -30 });
      //   timeline.from(".description", { opacity: 0, y: 40 });
    },
    { scope: container }
  );
  return (
    <>
      <div className="hero-bg" aria-hidden />

      <header id="header" ref={container}>
        <div className="container section-pad-top">
          <div className="row">
            <div className="column">
              <h1 className="title">
                <span className="g-text">
                  Verlässlichkeit in jedem Bauabschnitt
                </span>
              </h1>
              <p className="text_muted description">
                Als erfahrenes Bauunternehmen realisieren wir Projekte mit
                höchster technischer Präzision und organisatorischer Effizienz.
                Unser Anspruch ist es, jedes Vorhaben – ob im Wohn-, Gewerbe-
                oder Industriebau – termingerecht, wirtschaftlich und qualitativ
                auf höchstem Niveau umzusetzen.
              </p>
              {/* <div className="buttons_container">
              <Link to="services" className="btn" smooth={true} duration={1000}>
                Dienstleistungen
              </Link>
              <Link
                to="contact"
                className="btn btn_primary"
                smooth={true}
                duration={1000}
              >
                Kontakt
              </Link>
            </div> */}
            </div>
            <div className="column">
              <div className="image_container">
                {/* <img src={Baustellenplanung} alt="header" /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <Achievement />
    </>
  );
};

export default Header;
