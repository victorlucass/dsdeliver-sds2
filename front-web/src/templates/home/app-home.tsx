import { Link } from "react-router-dom";
import FooterApp from "../footer/footer-app";
import "../home/app-home.css";
import { ReactComponent as MainImg } from "../home/main-img.svg";
function HomeApp() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="home-actions">
            <h1 className="home-title">
              Faça seu pedido <br />
              que entregamos
              <br />
              pra você!!!
            </h1>
            <h3 className="home-subtitle">
              Escolha o seu pedido e em poucos minutos
              <br />
              levaremoss na sua porta
            </h3>
            <Link to="/orders" className="home-btn-order">
              Fazer pedido
            </Link>
          </div>
          <div className="home-img">
            <MainImg />
          </div>
        </div>
      </div>
      <footer>
        <FooterApp/>
      </footer>
    </>
  );
}

export default HomeApp;
