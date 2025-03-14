import './QuemSomos.css';

export const QuemSomos = () => {
  return (
    <section className="about-container" id="quem-somos">
      <div className="about-content">
        <h2 className="about-title">Quem somos</h2>
        <p className="about-subtitle">Desempenho e Responsabilidade</p>

        <div className="about-text">
          <p>A Dream Fértil nasceu do sonho de fazer mais pelo agricultor e pelo meio ambiente. Acreditamos em uma agricultura forte, competitiva e cada vez mais sustentável.</p>

          <p>Nossa missão é produzir fertilizantes orgânicos de alta qualidade, que proporcionem desempenho nas lavouras e reduzam o impacto ao meio ambiente.</p>

          <p>Localizada em Quinta do Sol, no norte do Paraná, nossa fábrica possui 3.200 m² de área construída com capacidade para produzir 60 mil toneladas de fertilizantes por ano.</p>
        </div>
      </div>

      <div className="about-image">
        <img src="/dreamfertil_fabrica.avif" alt="Fábrica da Dream Fértil" loading="lazy" />
      </div>
    </section>
  );
}
