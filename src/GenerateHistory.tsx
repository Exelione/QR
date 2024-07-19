import { useState } from "react";
import QRCode from "qrcode.react";
import Navigation from "./components/Navigation/Navigation";
import { GENERATE_DATA } from "./constants";
import styles from "./styles.module.css";

const GenerateHistory = () => {
  const getHistory = () => JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
  const [history, setHistory] = useState(getHistory());
  const [expandedQR, setExpandedQR] = useState<string | null>(null);

  const handleDelete = (itemToDelete: string) => {
    const newHistory = history.filter((item: string) => item !== itemToDelete);
    localStorage.setItem(GENERATE_DATA, JSON.stringify(newHistory));
    setHistory(newHistory);
  };
  const FullScreenQR = ({ value, onClose }: { value: string; onClose: () => void }) => (
    <div className={styles.fullScreenOverlay} onClick={onClose}>
      <QRCode value={value} size={Math.min(window.innerWidth, window.innerHeight) * 0.8} renderAs="svg" />
    </div>
  );

  return (
    <div className={styles.container}>
      {expandedQR && (
        <FullScreenQR value={expandedQR} onClose={() => setExpandedQR(null)} />
      )}
      <Navigation />
      <h1>Generation History</h1>
      {!history.length ?
        <p>No history found</p> :
        <ol>
          {history.map((item: string) => (
            <li key={item}>
              <QRCode value={item} size={50} className={styles.qrCode} renderAs="svg" onClick={()=> setExpandedQR(item)} />
              {item}
              <button onClick={() => handleDelete(item)}>X</button>
            </li>
          ))}
        </ol>
      }
    </div>
  );
};

export default GenerateHistory;