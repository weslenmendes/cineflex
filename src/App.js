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
          <Route path="sessoes/:idFilme" element={<Movie />} />
          <Route
            path="sessoes/:idFilme/assentos/:idSessao"
            element={<Session />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
