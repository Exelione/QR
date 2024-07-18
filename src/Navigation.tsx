import { Link } from "react-router-dom";
import style from "./styles.module.css";

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <Link className={style.link} to="/scan">Scan QR code</Link> 
      <Link className={style.link} to="/generate">Generate QR code</Link>
      </div>
  )
}

export default Navigation