import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="min-h-screen w-full text-white bg-gray-950">
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
