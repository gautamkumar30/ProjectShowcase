import React from "react";
import ReactDOM from "react-dom/client";

import { AuthContextProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
);
