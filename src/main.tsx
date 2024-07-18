import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QrCodeGenerator from './QrCodeGenerator';
import QrCodeScanner from './QrCodeScanner';
import HomePage from './HomePage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
