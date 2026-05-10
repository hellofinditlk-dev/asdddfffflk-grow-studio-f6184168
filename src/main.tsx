import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const reloadOnceForStaleChunk = () => {
  try {
    if (sessionStorage.getItem("chunk-reloaded")) return;
    sessionStorage.setItem("chunk-reloaded", "1");
  } catch {
    return;
  }

  window.location.reload();
};

window.addEventListener("error", (event) => {
  const message = event.message || String(event.error || "");
  if (message.includes("Failed to fetch dynamically imported module")) {
    reloadOnceForStaleChunk();
  }
});

window.addEventListener("unhandledrejection", (event) => {
  const reason = event.reason instanceof Error ? event.reason.message : String(event.reason || "");
  if (reason.includes("Failed to fetch dynamically imported module")) {
    reloadOnceForStaleChunk();
  }
});

const rootEl = document.getElementById("root")!;
// Remove server-injected H1 (from Netlify edge function) before React renders,
// so crawlers that execute JS don't see two identical H1s on the page.
rootEl.querySelectorAll(":scope > h1").forEach((el) => el.remove());
createRoot(rootEl).render(<App />);
