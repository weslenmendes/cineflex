import "./style.scss";

const Footer = ({ imgURL, show = false, title, weekday, time }) => {
  return (
    <footer className={imgURL ? "footer show" : "footer"}>
      <article className="mini-card">
        <img src={imgURL} alt="" />
      </article>

      <p className="title">{title}</p>

      {weekday && time && (
        <p className="session-info">
          {weekday} - {time}
        </p>
      )}
    </footer>
  );
};

export { Footer };
