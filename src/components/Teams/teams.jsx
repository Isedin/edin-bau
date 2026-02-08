import { useRef } from "react";
import "./Teams.css";
import { teams } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Teams = () => {
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
      timeline.from(".title", { opacity: 0, y: -50 });
      timeline.from(".sub_title", { opacity: 0, y: -50 });
      timeline.fromTo(
        ".team_card",
        { x: 100, opacity: 0 },
        { opacity: 1, stagger: 0.5, x: 0 }
      );
    },
    { scope: container }
  );
  return (
    <section id="team" ref={container}>
      <div className="container">
        <h1 className="title">
          <span className="g-text">Unsere Teams</span>
        </h1>
        <h3 className="sub_title">
          Lernen Sie unser starkes Team aus eigenem Architekten und erfahrenen Ingenieuren kennen – die treibende Kraft hinter präziser Planung, durchdachter Umsetzung und dem Erfolg jedes Projekts.
        </h3>
       <div className="teams_container">
        {teams.map((team, index) => (
          <div
            className={`team_card ${team.wide ? "team_card--wide" : ""}`}
            key={index}
          >
            <div className="profile_container">
              <img src={team.profile} alt={team.name} />
            </div>
            <div className="details">
              <h3 className="name">{team.name}</h3>
              {team.title && <p className="text_muted">{team.title}</p>}
            </div>
            <div className="wide_badge">
          <img src={team.badge} alt="" />
        </div>
          </div>
        ))}
      </div>

      </div>
    </section>
  );
};

export default Teams;
