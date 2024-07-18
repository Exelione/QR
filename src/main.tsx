import ReactDOM from 'react-dom/client';
import {BrowserRouter } from "react-router-dom";
import LayOut from './LayOut';





ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter basename='/'>
  <LayOut/>
  </BrowserRouter>


)
