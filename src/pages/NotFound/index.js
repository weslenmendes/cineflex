import "./style.scss";

import gif from "./../../assets/404.gif";

const NotFound = () => {
  return (
    <section className="not-found">
      <img src={gif} alt="404" />
      <h2>404</h2>
      <p>Ops... página não encontrada!</p>
    </section>
  );
};

export { NotFound };
