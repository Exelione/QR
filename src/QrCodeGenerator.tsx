import QRCode from 'qrcode.react';
import { useState } from 'react';


const QrCodeGenerator = () => {
    const [text, setText] = useState('');
    const [isShowQRCode, setIsShowQRCode] = useState('');
    const onClickHandler = () => {
        if (text.trim().length) {
            setIsShowQRCode(text);
            setText('');
            
        }
        else {
            alert('Please enter text to generate QR Code');
        }
        

    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setText(e.target.value);
        setIsShowQRCode('')
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '30px' }}>
            {isShowQRCode && <QRCode value={isShowQRCode} />}

            <input type='text' value={text} onChange={onChangeHandler} />
            <button onClick={onClickHandler} type='button'>Generate QR Code</button>
        </div>
    )
}

export default QrCodeGenerator