import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

import ErrorBoundary from "@/components/ErrorBoundary";

createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);
