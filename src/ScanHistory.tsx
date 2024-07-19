import styles from "./styles.module.css";
import { SCAN_DATA } from "./constants";
import Navigation from "./components/Navigation/Navigation";
import QRCode from "qrcode.react";
import { useState } from "react";
const ScanHistory = () => {
    const [history, setHistory] = useState<string[]>(JSON.parse(localStorage.getItem(SCAN_DATA) || "[]"));
    const handleDelete = (itemToDelete: string) => {
        const newHistory = history.filter((item: string) => item !== itemToDelete);
        setHistory(newHistory);
        localStorage.setItem(SCAN_DATA, JSON.stringify(newHistory));
    }
    return (
        <div className={styles.container}>
            <Navigation />
            <h1>Scan History</h1>
            {history.length ? <ol>
                {history.map((item: string) =>
                    <li key={item}>
                        {<QRCode value={item} size={50} className={styles.qrCode} renderAs="svg" />}
                        {item}
                        <button onClick={()=>handleDelete(item)}>X</button>
                    </li>
                )}
            </ol>
                : <p>No history found</p>}


        </div>
    )
}

export default ScanHistory