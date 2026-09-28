import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { startMarketingAnalytics } from "./lib/marketing-analytics.ts";
import "./index.css";

startMarketingAnalytics();
createRoot(document.getElementById("root")!).render(<App />);
