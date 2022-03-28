import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  seats: [],
};

const Session = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(initialState);
  const { idSessao } = useParams();
  const navigate = useNavigate();
  console.log(form);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await api.get(`showtimes/${idSessao}/seats`);
        setData({ ...data });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (e) {
        alert(e);
      }
    })();
  }, [idSessao]);

  const handleNavigate = (pathname) => {
    const send = {
      movie: {
        title: data.movie.title,
        weekday: data.day.weekday,
        time: data.name,
      },
      seats: form.seats,
      buyer: { name: form.name, cpf: form.cpf },
    };

    navigate(pathname, { state: { ...send } });
  };

  return (
    <section className="session">
      <header>
        <h1>Selecione o(s) assento(s)</h1>
      </header>
      {data.length === 0 ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Seats
            data={data}
            form={form}
            setForm={setForm}
            seats={form?.seats}
          />
          <section className="legend">
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
          </section>
          <Form form={form} setForm={setForm} onSuccess={handleNavigate} />

          {data.movie && (
            <Footer
              imgURL={data.movie.posterURL}
              title={data.movie.title}
              weekday={data.day.weekday}
              time={data.name}
            />
          )}
        </React.Fragment>
      )}
    </section>
  );
};

export { Session };
