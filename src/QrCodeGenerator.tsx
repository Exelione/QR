import QRCode from 'qrcode.react';
import { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const QrCodeGenerator = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    const onClickHandler = () => {
        if (text.trim().length) {
            setResult(text);
            setText('');
            
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
            <Link className={styles.link} to="/">Go Back</Link>
            <Link className={styles.link} to="/scan">Scan QR</Link>
            {result && <QRCode value={result} size={250} className={styles.qrCode} renderAs="svg"/>}

            <input placeholder='Enter text' type='text' value={text} onChange={onChangeHandler} />
            <button onClick={onClickHandler} type='button'>Generate QR Code</button>
        </div>
    )
}

export default QrCodeGenerator