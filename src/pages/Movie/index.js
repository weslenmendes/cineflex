import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";

import "./style.scss";

const Movie = () => {
  const [data, setData] = useState({});
  const [showMovieSection, setShowMovieSection] = useState(false);
  const { idFilme } = useParams();

  useEffect(() => {
    (async function () {
      const { data } = await api.get(`movies/${idFilme}/showtimes`);
      setData({ ...data });
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowMovieSection(true);
    })();
  }, [idFilme]);

  const makeContent = () => {
    const { days } = data;

    return (
      data &&
      days?.map((day, index) => {
        const { showtimes, weekday, date } = day;

        return (
          <section key={index} className="movie-section">
            <div className="weekday">
              <p>
                {weekday} - {date}
              </p>
            </div>
            <main className="showtimes">
              {showtimes?.map(({ name, id: idSessao }) => (
                <Button
                  key={idSessao}
                  content={name}
                  pathname={`assentos/${idSessao}`}
                />
              ))}
            </main>
          </section>
        );
      })
    );
  };

  const content = makeContent();

  return (
    <section className="movie">
      <header>
        <h1>Selecione o horário</h1>
      </header>
      {content ? (
        <main
          className={
            showMovieSection ? "movie-sections show" : "movie-sections"
          }
        >
          {content}
        </main>
      ) : (
        <Loading />
      )}
      {content && <Footer imgURL={data.posterURL} title={data.title} />}
    </section>
  );
};

export { Movie };
