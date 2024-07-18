import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QrCodeGenerator from './QrCodeGenerator';
import QrCodeScanner from './QrCodeScanner';
import Navigation from './Navigation';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
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
