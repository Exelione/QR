import styles from "./styles.module.css";
import { SCAN_DATA } from "./constants";
import Navigation from "./components/Navigation/Navigation";
import QRCode from "qrcode.react";
const ScanHistory = () => {
    const history = localStorage.getItem(SCAN_DATA);
    return (
        <div className={styles.container}>
            <Navigation />
            <h1>Scan History</h1>
            {history ? <ol>
                {JSON.parse(history).map((item: string) =>
                    <li key={item}>
                        {<QRCode value={item} size={50} className={styles.qrCode} renderAs="svg"/>}
                        {item}
                    </li>
                )}
            </ol>
                : <p>No history found</p>}


        </div>
    )
}

export default ScanHistory