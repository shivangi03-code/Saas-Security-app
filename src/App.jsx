import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./themeContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ActiveScanDetail from "./pages/ActiveScanDetail";

const App = () => (
  <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scans" element={<ActiveScanDetail />} /> {/* Active Scan only */}
        <Route path="/scan/:id" element={<ActiveScanDetail />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;