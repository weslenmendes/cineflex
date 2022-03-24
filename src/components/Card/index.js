import { Link } from "react-router-dom";

import "./style.scss";

const Card = ({ id, title, posterURL }) => {
  return (
    <Link to={`/filme/${id}`}>
      <article className="card">
        <img src={posterURL} alt={title} />
      </article>
    </Link>
  );
};

export { Card };
