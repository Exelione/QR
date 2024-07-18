import styles from "./styles.module.css";
import { SCAN_DATA } from "./constants";
import Navigation from "./components/Navigation/Navigation";
const ScanHistory = () => {
    const history = localStorage.getItem(SCAN_DATA);
  return (
    <div className={styles.container}>
        <Navigation/>
        <h1>Scan History</h1>
        {history && <ol>
            {JSON.parse(history).map((item: string) => <li>{item}</li>)}
        </ol>}
        

        </div>
  )
}

export default ScanHistory