import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { StrictMode } from "react";
    // import ReactDOM from "react-dom";
    
    // import WebFont from "webfontloader";
    // import App from "./App";

    // WebFont.load({
    //     google: {
    //         families: ['Poppins', "Inter:700"]
    //     }
    //   });

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <StrictMode>
        <App />
      </StrictMode>,
      rootElement
    );
    