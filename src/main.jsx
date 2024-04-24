import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import { PollProvider } from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PollProvider>
        <App />
      </PollProvider>
    </BrowserRouter>
  </React.StrictMode>
);
