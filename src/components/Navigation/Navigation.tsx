import { Link } from "react-router-dom";
import styles from "../../styles.module.css";


const Navigation = () => {
  switch (window.location.hash) {
   case "#/scan":
      document.title = "Scan QR code";
      return (
        <div className={styles.navigation}>
          <Link className={styles.link} to="/">Go home</Link>
          <Link className={styles.link} to="/generate">Generate QR code</Link>
          <Link className={styles.link} to="/scans">Scans</Link>
          <Link className={styles.link} to="/generation">Generations</Link>
        </div>
      )
    case "#/generate":
      document.title = "Generate QR code";
      return (
        <div className={styles.navigation}>
          <Link className={styles.link} to="/">Go home</Link>
          <Link className={styles.link} to="/scan">Scan QR code</Link>
          <Link className={styles.link} to="/scans">Scans</Link>
          <Link className={styles.link} to="/generation">Generations</Link>
        </div>
      )
    case "#/scans":
      document.title = "Scan History";
      return (
        <div className={styles.navigation}>
          <Link className={styles.link} to="/">Go home</Link>
          <Link className={styles.link} to="/scan">Scan QR code</Link>
          <Link className={styles.link} to="/generate">Generate QR code</Link>
          <Link className={styles.link} to="/generation">Generations</Link>
        </div>
      )
    case "#/generation":
      document.title = "Generation History";
      return (
        <div className={styles.navigation}>
          <Link className={styles.link} to="/">Go home</Link>
          <Link className={styles.link} to="/scan">Scan QR code</Link>
          <Link className={styles.link} to="/generate">Generate QR code</Link>
          <Link className={styles.link} to="/scans">Scans</Link>
        </div>
      )
    default:
      document.title = "QR code";
      return (

        <div className={styles.navigation}>
          <Link className={styles.link} to="/scan">Scan QR code</Link>
          <Link className={styles.link} to="/generate">Generate QR code</Link>
          <Link className={styles.link} to="/scans">Scans</Link>
          <Link className={styles.link} to="/generation">Generations</Link>
        </div>
    
    
      )
      
  }

}

export default Navigation