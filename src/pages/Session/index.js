import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Seats } from "../../components/Seats";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";

import "./style.scss";

const initialState = {
  ids: [],
  name: "",
  cpf: "",
};

const Session = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(initialState);
  const { sessionId } = useParams();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await api.get(`showtimes/${sessionId}/seats`);
        setData({ ...data });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (e) {
        alert(e);
      }
    })();
  }, [sessionId]);

  return (
    <section className="session">
      <header>
        <h1>Selecione o(s) assento(s)</h1>
      </header>
      {data ? (
        <React.Fragment>
          <Seats data={data} form={form} setForm={setForm} />
          <div className="legend">
            <div>
              <div className="seat selected"></div>
              <p>Selecionado</p>
            </div>

            <div>
              <div className="seat"></div>
              <p>Disponível</p>
            </div>

            <div>
              <div className="seat unavailable"></div>
              <p>Indisponível</p>
            </div>
          </div>
          <Form form={form} setForm={setForm} />

          {data.movie && (
            <Footer
              imgURL={data.movie.posterURL}
              title={data.movie.title}
              weekday={data.day.weekday}
              time={data.name}
            />
          )}
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export { Session };
