import React, { useEffect, useRef } from "react";
import "./Achievement.css";
import { FaDiagramProject, FaUsersLine } from "react-icons/fa6";
import ReactOdometer from "react-odometerjs";
import { GiExtraTime } from "react-icons/gi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Achievement = () => {
  const [clients, setClients] = React.useState(0);
  const [projects, setProjects] = React.useState(0);
  const [teams, setTeams] = React.useState(0);
  const container = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setClients(100);
      setProjects(50);
      setTeams(10);
    }, 800);
    return () => clearTimeout(id);
  }, []);

  useGSAP(
    () => {
      gsap.from(".stat_card", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
      });
    },
    { scope: container }
  );

  return (
    <section id="stats" className="stats">
      <div className="container">
        <div className="stats_container" ref={container}>
          <div className="stat_card">
            <div className="icon_container">
              <FaUsersLine />
            </div>
            <div className="details">
              <div className="count_row">
                <ReactOdometer value={clients} className="title" />
                <h1 className="g-text title">+</h1>
              </div>
              <small className="text_muted">Zufriedene Kunden</small>
            </div>
          </div>

          <div className="stat_card">
            <div className="icon_container">
              <FaDiagramProject />
            </div>
            <div className="details">
              <div className="count_row">
                <ReactOdometer value={projects} className="title" />
                <h1 className="g-text title">+</h1>
              </div>
              <small className="text_muted">Kompletierte Projekte</small>
            </div>
          </div>

          <div className="stat_card">
            <div className="icon_container">
              <GiExtraTime />
            </div>
            <div className="details">
              <div className="count_row">
                <ReactOdometer value={teams} className="title" />
                <h1 className="g-text title">+</h1>
              </div>
              <small className="text_muted">Jahre Erfahrung</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
