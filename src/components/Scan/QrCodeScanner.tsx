import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import styles from "../../styles.module.css";
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { SCAN_DATA } from "../../constants.ts";


const QrCodeScanner: React.FC = () => {


  const [result, setResult] = useState<string>('');
  const onScanHandler = (result: IDetectedBarcode[]): void => {
    setResult(result[0].rawValue);
    const prevResult: string[] = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevResult, result[0].rawValue]
        .filter((value, index, self) => self.indexOf(value) === index)
        
      )
    );
  }

  
  return (

    <div className={styles.container}>
      <Navigation />
      <p>Use your webcam to scan the QR code</p>
      <Scanner allowMultiple components={{ finder: false, audio: false, }} styles={{
        container: {
          width: 240,
        }
      }} onScan={onScanHandler} />
      <h1 className={styles.result}> {result}</h1>

    </div>


  )
}

export default QrCodeScanner