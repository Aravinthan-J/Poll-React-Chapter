import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";

import { PollProvider } from "./context/index.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ReportPage from "./report_page.jsx";
import { Question } from "./components/question/index.jsx";
import MultipleChoiceQuestion from "./components/view/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PollProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create" element={<Question />} />
          <Route path="/:questionID/" element={<MultipleChoiceQuestion />} />
          <Route path="/:questionID/report" element={<ReportPage />} />
        </Routes>
      </PollProvider>
    </BrowserRouter>
  </React.StrictMode>
);
