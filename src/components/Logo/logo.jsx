import "./Logo.css";
import EbinBauLogo from "../../assets/edinbau-logo.jpg";

const Logo = () => {
  return (
    <div className="logo">
      <div className="icon_container">
      <img src={EbinBauLogo} alt="" />
      </div>
        <h1 className="name">Edin<span>Bau</span></h1>
    </div>
  );
};

export default Logo;