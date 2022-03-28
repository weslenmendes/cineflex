import { useState, useEffect } from "react";

import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";

import "./style.scss";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    (async function () {
      const { data } = await api.get("/movies");
      setCards([...data]);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowCards(true);
    })();
  }, []);

  return (
    <section className="home">
      <header>
        <p>Selecione o filme</p>
      </header>

      {cards.length === 0 ? (
        <Loading />
      ) : (
        <section
          className={cards.length > 0 && showCards ? "cards show" : "cards"}
        >
          {cards.map(({ id, title, posterURL }) => (
            <Card key={id} id={id} title={title} posterURL={posterURL} />
          ))}
        </section>
      )}
    </section>
  );
};

export { Home };
