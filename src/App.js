import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { Session } from "./pages/Session";
import { Success } from "./pages/Success";
import { NotFound } from "./pages/NotFound";

import { Header } from "./components/Header";

import "./styles/main.scss";

const App = () => {
  const sessionPathname = "sessoes/:idFilme";
  const seatsPathname = `${sessionPathname}/assentos/:idSessao`;

  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={sessionPathname} element={<Movie />} />
          <Route path={seatsPathname} element={<Session />} />
          <Route path="sucesso" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
