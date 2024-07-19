import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import LayOut from './LayOut';
import { StrictMode } from 'react';





ReactDOM.createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <HashRouter>
      <LayOut />
    </HashRouter>
  </StrictMode>
)
