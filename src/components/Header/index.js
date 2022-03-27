import { useNavigate } from "react-router-dom";

import "./style.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 onClick={() => navigate("/")}>Cineflex</h1>
    </header>
  );
};

export { Header };
