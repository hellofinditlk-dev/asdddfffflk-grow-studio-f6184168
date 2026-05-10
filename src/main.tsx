import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;
// Remove server-injected H1 (from Netlify edge function) before React renders,
// so crawlers that execute JS don't see two identical H1s on the page.
rootEl.querySelectorAll(":scope > h1").forEach((el) => el.remove());
createRoot(rootEl).render(<App />);
