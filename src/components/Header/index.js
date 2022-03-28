import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/arrow-back-circle.svg";

import "./style.scss";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header className="header">
      {pathname === "/" ? (
        <></>
      ) : (
        <Logo
          className="back-button"
          fill="#e8833a"
          title="Voltar"
          onClick={() => navigate(-1)}
        />
      )}
      <h1 onClick={() => navigate("/")}>Cineflex</h1>
    </header>
  );
};

export { Header };
