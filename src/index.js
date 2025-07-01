import ReactDOM from "react-dom/client";
import Scrollup from "./components/Scrollup";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Scrollup />
    <App />
    <ToastContainer />
  </BrowserRouter>
);
