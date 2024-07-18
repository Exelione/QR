
import { Route, Routes } from "react-router-dom";
import styles from "./styles.module.css";
import QrCodeScanner from "./components/Scan/QrCodeScanner";
import QrCodeGenerator from "./components/Generate/QrCodeGenerator";
import HomePage from "./components/pages/HomePage";
import ScanHistory from "./ScanHistory";
import GenerateHistory from "./GenerateHistory";



const LayOut = () => {
    return (
        <div className={styles.homePage}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scans" element={<ScanHistory />} />
                <Route path="/generation" element={<GenerateHistory />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default LayOut