import QRCode from 'qrcode.react';
import { useState } from 'react';
import styles from "../../styles.module.css";
import Navigation from '../Navigation/Navigation';
import { GENERATE_DATA } from '../../constants';


const QrCodeGenerator = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    const onClickHandler = () => {
        if (text.trim().length) {
            setResult(text);
            setText('');
            const prevResult: string[] = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

            localStorage.setItem(
                GENERATE_DATA,
                JSON.stringify([...prevResult, text]
                .filter((value, index, self) => self.indexOf(value) === index)
                
              )
            ); 
            
        }
        else {
            alert('Please enter text to generate QR Code');
        }
        

    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setText(e.target.value);
        setResult('')
    }


    return (
        
        <div className={styles.container}>
            <Navigation/>
            {result && <QRCode value={result} size={250} className={styles.qrCode} renderAs="svg"/>}

            <input placeholder='Enter text' type='text' value={text} onChange={onChangeHandler} />
            <button onClick={onClickHandler} type='button'>Generate QR Code</button>
        </div>
    )
}

export default QrCodeGenerator