import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("media-search-theme") === "light" ? "light" : "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("media-search-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen w-full bg-[var(--page-bg)] text-[var(--text-primary)] antialiased transition-colors duration-200">
      <ToastContainer theme={theme} />
      <Layout
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
          )
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
