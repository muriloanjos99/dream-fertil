import { Button } from "@mui/material";
import "./Inicio.css";

function Inicio() {
  return (
    <section tabIndex={-1} className="inicio-container" data-block-level-container="ClassicSection">
      <div className="inicio-content">
        <h2 className="inicio-title">
          Fertilização orgânica
          <span style={{ marginLeft: "0.45em" }}>
            de {""}
          </span>
          alta qualidade
        </h2>
        <p className="inicio-description">
          A Dream Fértil produz fertilizantes 100% orgânicos certificados internacionalmente. Com pesquisa e um moderno processo produtivo, oferecemos uma alternativa sustentável de Alta Produtividade e o melhor Custo Benefício.
        </p>
        <div className="inicio-button-container">
          <Button className="inicio-button" variant="contained" color="primary" size="large">
            Entre em contato
          </Button>
        </div>
      </div>
    </section >
  )
}

export default Inicio;