import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ content, pathname }) => {
  return (
    <Link to={pathname}>
      <button className="btn">{content}</button>
    </Link>
  );
};

export { Button };
