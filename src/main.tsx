import ReactDOM from 'react-dom/client';
import style from './styles.module.css';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import QrCodeGenerator from './QrCodeGenerator';
import QrCodeScanner from './QrCodeScanner';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div className={style.navigation}>
      <Link className={style.link} to="/scan">Scan QR code</Link> 
      <Link className={style.link} to="/generate">Generate QR code</Link>
      </div>
  },
  {
    path: "/generate",
    element: <QrCodeGenerator />,
  },
  {
    path: "/scan",
    element: <QrCodeScanner />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router} />


)
