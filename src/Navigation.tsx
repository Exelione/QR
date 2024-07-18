import { Link } from "react-router-dom";
import style from "./styles.module.css";

const Navigation = () => {
  switch (window.location.pathname) {
    case "/scan":
      document.title = "Scan QR code";
      return (
        <div className={style.navigation}>
          <Link className={style.link} to="/">Go home</Link>
          <Link className={style.link} to="/generate">Generate QR code</Link>
        </div>
      )
    case "/generate":
      document.title = "Generate QR code";
      return (
        <div className={style.navigation}>
          <Link className={style.link} to="/">Go home</Link>
          <Link className={style.link} to="/scan">Scan QR code</Link>
        </div>
      )
    default:
      document.title = "QR code";
      break;
  }
  return (
    <div className={style.navigation}>
      <Link className={style.link} to="/scan">Scan QR code</Link>
      <Link className={style.link} to="/generate">Generate QR code</Link>
    </div>
  )
}

export default Navigation