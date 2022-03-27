import "./style.scss";

const Footer = ({ imgURL, title, weekday, time }) => {
  return (
    <footer className={imgURL ? "footer show" : "footer"}>
      <article className="mini-card">
        <img src={imgURL} alt="" />
      </article>

      <p className="title">
        {title} <br /> {weekday} {time && time.padStart(time.length + 2, "- ")}
      </p>
    </footer>
  );
};

export { Footer };
