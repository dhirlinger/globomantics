import logo from "../assets/GloboLogo.png"
import styles from "./Banner.module.css"

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
  };

const Banner = () => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>Providing houses all over the world</div>
    </header>
  );
}

export default Banner;