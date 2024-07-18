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
        <p>No history found</p> : 
        <ol>
          {history.map((item)=> <li key={item}>{item}</li>)}
        </ol>
        }
    </div>
  )
}

export default GenerateHistory