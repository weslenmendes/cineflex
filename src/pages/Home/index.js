import { useState, useEffect } from "react";

import { Card } from "../../components/Card";

import { api } from "../../services/api";

import "./style.scss";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await api.get();
      setCards([...data]);
    })();
  }, []);

  return (
    <section className="home">
      <header>
        <p>Selecione o filme</p>
      </header>

      <section className="cards">
        {cards.map(({ id, title, posterURL }) => (
          <Card key={id} title={title} posterURL={posterURL} />
        ))}
      </section>
    </section>
  );
};

export { Home };
