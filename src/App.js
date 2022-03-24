import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

import { Header } from "./components/Header";

import "./styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
