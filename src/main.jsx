import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store.js";

// Create root and render app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Redux provider */}
    <Provider store={store}>
      {/* React router provider */}
      <BrowserRouter>
        {/* Main App component */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
