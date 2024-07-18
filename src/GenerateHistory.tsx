import Navigation from "./components/Navigation/Navigation";
import { GENERATE_DATA } from "./constants";
import styles from "./styles.module.css";

const GenerateHistory = () => {
    const history: string[] = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
  return (
    <div className={styles.container}>
        <Navigation />
        <h1>Generation History</h1>
        {!history.length ? 
        <h1>No history</h1> : 
        <ol>
          {history.map((item)=> <li>{item}</li>)}
        </ol>
        }
    </div>
  )
}

export default GenerateHistory