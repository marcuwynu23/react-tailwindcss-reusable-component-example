import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer, ToastProvider } from "ui";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <App />
      <ToastContainer />
    </ToastProvider>
  </StrictMode>
);
