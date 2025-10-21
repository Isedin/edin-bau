import { useRef } from "react";
import "./About.css";
import { Baustellenplanung, Building1, Kranarbeiten, Building2 } from "../../assets";
import { FaCheck } from "react-icons/fa";
import { FaRegCompass, FaHandshake } from "react-icons/fa6";
import { HiOutlineCpuChip, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const container = useRef(null);
	useGSAP(
		() => {
			const timeline = gsap.timeline({
				delay: 0.5,
				scrollTrigger: {
					trigger: container.current,
					start: "20% bottom",
					end: "bottom top",
				},
			});
			timeline.from(".company_photo", { opacity: 0, x: -50 });
			timeline.from(".title", { opacity: 0, y: -50 });
			timeline.from(".sub_title", { opacity: 0, y: -50 });
			timeline.from(".box", { opacity: 0, x: 50, stagger: 0.5 });
			timeline.from(".description", { opacity: 0, y: 50 });
			timeline.from(".group", { opacity: 0, y: 50 });
			timeline.from(".buttons_container", { opacity: 0, y: 50 });
		},
		{ scope: container }
	);
	return (
    <section id="about" ref={container}>
      <div className="container">
        <div className="column company_photo">
          <img src={Baustellenplanung} alt="EB BAU" />
        </div>
        <div className="column">
          <h1 className="title">
            <span className="g-text">Über Uns</span>
          </h1>
          <h3 className="sub_title">
            Qualität beginnt mit Planung – und endet mit Perfektion.
          </h3>
          <div className="company_media_container">
            <div className="box">
              <img src={Building1} alt="" />
            </div>
            <div className="box">
              <img src={Kranarbeiten} alt="" />
            </div>
            <div className="box">
              <img src={Building2} alt="" />
            </div>
          </div>

          <p className="text_muted description">
            Die Edin Bau GmbH steht für präzise Planung, effiziente Ausführung
            und nachhaltige Bauqualität. Unser Leistungsspektrum umfasst die
            Entwicklung, Realisierung und Modernisierung von Wohn-, Gewerbe- und
            Industrieprojekten. Mit einem interdisziplinären Team aus erfahrenen
            Ingenieuren, Bauleitern und Facharbeitern garantieren wir höchste
            Standards in allen Projektphasen – von der Konzeption bis zur
            Fertigstellung. Unser Ziel ist es, dauerhafte Werte zu schaffen –
            durch Qualität, Transparenz und eine verlässliche Partnerschaft mit
            unseren Auftraggebern.
          </p>
          <div className="group">
            <div className="row">
              <div className="icon_container">
                <FaRegCompass />
              </div>
              <div className="details">
                <p className="text_muted">Planung</p>
                <h3>Präzision</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <HiOutlineCpuChip />
              </div>
              <div className="details">
                <p className="text_muted">Expertise</p>
                <h3>Ingenieure</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaHandshake />
              </div>
              <div className="details">
                <p className="text_muted">Partnerschaft</p>
                <h3>Vertrauen</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <HiOutlineBuildingOffice2 />
              </div>
              <div className="details">
                <p className="text_muted">Qualität</p>
                <h3>Zufriedenheit</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
