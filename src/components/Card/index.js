import "./style.scss";

const Card = ({ title, posterURL, overview, releaseDate, onClick }) => {
  return (
    <article className="card" onClick={onClick}>
      <img src={posterURL} alt={title} />
    </article>
  );
};

export { Card };
