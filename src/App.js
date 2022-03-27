import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { Session } from "./pages/Session";

import { Header } from "./components/Header";

import "./styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Movie />} />
          <Route path="/filme/:id/sessao/:sessionId" element={<Session />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
