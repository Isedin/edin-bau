import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import About from "./components/About/About";
import Services from "./components/Services/services";
import Teams from "./components/Teams/teams";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Logo from "./components/Logo/logo";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Services />
        <About />
        <Project />
        <Teams />
        <Contact />
        <Footer />
        <Logo />
      </div>
    </>
  );
}

export default App;
