import React from "react";
import { useLocation } from "react-router-dom";

import { Button } from "../../components/Button";
import "./style.scss";

import sad from "./../../assets/fbsad.gif";

const Success = () => {
  const { state } = useLocation();

  const makeContent = () => {
    if (state) {
      return (
        <React.Fragment>
          <header>
            <h1>Pedido feito com sucesso!</h1>
          </header>

          <div>
            <h2>Filme e Sessão</h2>
            <p>
              {state.movie.title} <br />
              {state.movie.weekday} - {state.movie.time}
            </p>
          </div>

          <div>
            <h2>Ingressos</h2>
            {state?.seats.map((seat, index) => (
              <p key={index}>Assento {seat}</p>
            ))}
          </div>

          <div>
            <h2>Comprador</h2>
            <p>
              Nome: {state.buyer.name} <br />
              CPF: {state.buyer.cpf}
            </p>
          </div>

          <Button content="Voltar para home" pathname="/" />
        </React.Fragment>
      );
    }

    return (
      <h1 className="message">
        <img src={sad} type="image/gif" alt="" />
        Ops... Você não tem nenhuma confirmação.
      </h1>
    );
  };

  const content = makeContent();

  return (
    <section className={content ? "success show" : "success"}>
      {content}
    </section>
  );
};

export { Success };
