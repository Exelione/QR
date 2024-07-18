import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import styles from "./styles.module.css";
import { useState } from "react";
import Navigation from "./Navigation";

const QrCodeScanner = () => {
  const [result, setResult] = useState('');
  const onScanHandler = (result: IDetectedBarcode[]) => {
    console.log(result)
    setResult(result[0].rawValue);
  }


  return (
    
    <div className={styles.container}>
      <Navigation/>
      <p>Use your webcam to scan the QR code</p>
      <Scanner allowMultiple components={{finder: false,audio: false,}} styles={{
        container: {
          width: 240,
        }
      }} onScan={onScanHandler} />
      <h1 className={styles.result}> {result}</h1>
    </div>
   
    
  )
}

export default QrCodeScanner