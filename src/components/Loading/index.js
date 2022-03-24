import { ReactComponent as Load } from "../../assets/loading.svg";

import "./style.scss";

const Loading = () => {
  return (
    <article className="loading">
      <Load />
      <p>Carregando...</p>
    </article>
  );
};

export { Loading };
