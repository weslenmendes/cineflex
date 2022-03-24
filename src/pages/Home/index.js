import { useState, useEffect } from "react";

import { Card } from "../../components/Card";

import { api } from "../../services/api";

import "./style.scss";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    (async function () {
      const { data } = await api.get();
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

      <section className={showCards ? "cards show" : "cards"}>
        {cards.map(({ id, title, posterURL }) => (
          <Card key={id} id={id} title={title} posterURL={posterURL} />
        ))}
      </section>
    </section>
  );
};

export { Home };
