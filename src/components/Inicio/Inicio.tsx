import { Button } from "@mui/material";
import "./Inicio.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getWhatsAppLink } from "../../utils/getWhatsappLink";

export const Inicio = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section tabIndex={-1} className="inicio-container" id="inicio">
      <video
        className="background-video"
        src="/file.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="inicio-content">
        <h2 className="inicio-title">
          Fertilização <span>orgânica</span>&nbsp; de <span>
            alta qualidade
          </span>
        </h2>
        <p className="inicio-description">
          A Dream Fértil produz fertilizantes 100% orgânicos certificados internacionalmente. Com pesquisa e um moderno processo produtivo, oferecemos uma alternativa sustentável de Alta Produtividade e o melhor Custo Benefício.
        </p>
        <div className="inicio-button-container">
          <Button
            className="inicio-button"
            variant="contained"
            color="primary"
            size="large"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Entre em contato
          </Button>
        </div>
      </div>
    </section >
  )
}