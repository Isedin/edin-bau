import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { SiBlueprint } from "react-icons/si";
import { TbTools } from "react-icons/tb";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import {
  Baustellenplanung,
  Building1,
  Building3,
  Maurerarbeiten,
  Nachhaltigkeit,
  Kranarbeiten,
  Qualitaetbauen,
  Rohbau,
  Schalungsbauer,
  Privathaeuser,
  Brueckenbau,
  Innovativesbauen,
} from "./assets";

export const navTabs = [
  { name: "Home", id: "header" },
  { name: "Über uns", id: "about" },
  { name: "Dienstleistungen", id: "services" },
  { name: "Projekte", id: "project" },
  { name: "Team", id: "team" },
  { name: "Galerie", id: "gallery" },
  // { name: "Blog", id: "blog" },
];

export const services = [
  {
    name: "Project Management",
    icon: <GrUserManager />,
    description: `Unser Projektmanagement bildet das Rückgrat jedes erfolgreichen Bauvorhabens. Wir übernehmen die vollständige Steuerung von Planung, Zeitmanagement, Ressourcen und Qualitätssicherung – mit dem Ziel, Projekte termingerecht und innerhalb des vereinbarten Budgets umzusetzen.`,
  },
  {
    name: "Generellunternehmung",
    icon: <SiBlueprint />,
    description: `Als Generalunternehmer koordinieren wir sämtliche Gewerke und Schnittstellen eines Projekts. Von der Ausschreibung über die Ausführung bis zur schlüsselfertigen Übergabe stellen wir sicher, dass alle Leistungen präzise aufeinander abgestimmt sind und den geltenden Normen entsprechen.`,
  },
  {
    name: "Design-Build-Dienstleistungen",
    icon: <FaDrawPolygon />,
    description: `Durch die Kombination von Planung und Ausführung aus einer Hand optimieren wir Kommunikationswege und Entscheidungsprozesse. Dieses integrierte Modell ermöglicht effiziente Abläufe, klare Verantwortlichkeiten und eine durchgängige Qualitätskontrolle über alle Projektphasen hinweg.`,
  },
  {
    name: "Bauvorbereitung",
    icon: <AiOutlineFileProtect />,
    description: `Eine präzise Bauvorbereitung ist die Grundlage jedes Projekts. Wir übernehmen sämtliche Vorarbeiten – von der Flächenfreimachung über Erdarbeiten bis zur Installation technischer Infrastrukturen – und schaffen so die Voraussetzungen für einen reibungslosen Baustart.`,
  },
  {
    name: "Spezialisierte Baudienstleistungen",
    icon: <IoConstructSharp />,
    description: `Unsere spezialisierten Teams decken ein breites Spektrum technischer Gewerke ab, darunter Beton- und Stahlbau, Maurerarbeiten, Abdichtungssysteme und Sichtbeton. Präzision, Arbeitssicherheit und normgerechte Ausführung stehen dabei im Mittelpunkt.`,
  },
  {
    name: "Renovierung und Umbau",
    icon: <TbTools />,
    description: `Bei Renovierungen und Umbauten sorgen wir für die fachgerechte Modernisierung bestehender Gebäude. Unser Fokus liegt auf Werterhalt, Energieeffizienz und der Anpassung an aktuelle bauliche und technische Standards.`,
  },
];

export const teams = [
  {
    name: "Ingenieure",
    profile: Baustellenplanung,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Maurerarbeiten",
    profile: Maurerarbeiten,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Brückenbau",
    profile: Brueckenbau,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Schalungsbauer",
    profile: Schalungsbauer,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
];

export const projects = [
  {
    title: "Großprojekte & Strukturmodernisierung",
    image: Kranarbeiten,
    description: `Komplexe Bauprojekte und großflächige Umbauten erfordern Erfahrung, Präzision und effiziente Koordination aller Gewerke. Unser Team begleitet die Modernisierung von bestehenden Strukturen sowie den Neubau großvolumiger Anlagen – zuverlässig, sicher und nach höchsten Qualitätsstandards.`,
  },
  {
    title: "Büro- und Gewerbebau",
    image: Building1,
    description: `Wir realisieren moderne Büro- und Gewerbebauten, die Funktionalität, Effizienz und architektonische Qualität vereinen. Unsere Leistungen umfassen Planung, Tragwerkskonzepte und Ausführung für Neubauten, Erweiterungen und gewerbliche Komplexe jeder Größenordnung.`,
  },
  {
    title: "Brückenbau",
    image: Brueckenbau,
    description: `Der Brückenbau zählt zu den anspruchsvollsten Disziplinen im Ingenieurwesen. Dank unseres spezialisierten Fachingenieurs und modernster Planungsmethoden gewährleisten wir präzise Statik, höchste Sicherheitsstandards und langlebige Konstruktionen – von kleinen Spannweiten bis zu komplexen Brückensystemen.`,
  },
  {
    title: "Industrie- und Logistikbau",
    image: Building3,
    description: `Wir planen und errichten Industrie- und Logistikgebäude, die auf Effizienz, Wirtschaftlichkeit und Nachhaltigkeit ausgelegt sind. Ob Produktionshalle, Lager oder gesamtes Industrieareal – wir übernehmen die komplette Ausführung von der Fundamentierung bis zur schlüsselfertigen Übergabe.`,
  },
  {
    title: "Privathäuser und Villen",
    image: Privathaeuser,
    description: `Wir begleiten Bauherren bei der Realisierung exklusiver Wohnprojekte – von modernen Stadtvillen bis zu individuellen Einfamilienhäusern. Hochwertige Materialien, präzise Ausführung und persönliche Betreuung garantieren Ergebnisse, die höchsten Ansprüchen gerecht werden.`,
  },
  {
    title: "Rohbau",
    image: Rohbau,
    description: `Der Rohbau bildet die tragende Struktur jedes Projekts. Mit unserer langjährigen Erfahrung im Massiv- und Stahlbetonbau schaffen wir stabile und präzise Grundkonstruktionen, die die Basis für alle weiteren Bauphasen bilden.`,
  },
];

export const contacts = [
  {
    name: "Email",
    value: "info@ebbau-gmbh.de",
    icon: <SiMinutemailer />,
    href: "mailto: info@ebbau-gmbh.de",
    buttonTitle: "Email",
  },
  {
    name: "Telefonnummer",
    value: "+491622768900",
    icon: <BsFillTelephoneFill />,
    href: "tel:+491622768900",
    buttonTitle: "Anrufen",
  },
  {
    name: "Handynummer",
    value: "+491622767839",
    icon: <FaMobileAlt />,
    href: "tel:+491622767839",
    buttonTitle: "Anrufen",
  },
  {
    name: "Addresse",
    value: "Veckerhagener Str. 41, 34233 Fuldatal, DE-Hessen",
    icon: <FaMapLocationDot />,
    href: "https://www.google.de/maps/place/EB+Bau+GmbH/@51.0294764,7.9241231,8z/data=!4m10!1m2!2m1!1seb+bau+gmbh!3m6!1s0x47bb390043f6bacf:0xe771888ccfe2126!8m2!3d51.3527765!4d9.5268427!15sCgtlYiBiYXUgZ21iaJIBFGNvbnN0cnVjdGlvbl9jb21wYW554AEA!16s%2Fg%2F11wbfmrnq3?entry=ttu",
    buttonTitle: "Standort",
  },
];

export const footer = [
  {
    name: "Explore",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
  {
    name: "Section",
    routes: [
      { name: "Home", id: "header" },
      { name: "About Us", id: "about" },
      { name: "Services", id: "services" },
      { name: "Team", id: "team" },
      { name: "Project", id: "project" },
    ],
  },
];
