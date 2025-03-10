import './Produtos.css';

export const Produtos = () => {
  return (
    <section className="products-section" id="fertlizantes">
      <h2 className="section-title">Nossos produtos</h2>

      <div className="products-grid">
        <div className="product-card">
          <img src="src/assets/dreamfertil_garden.avif" alt="Fertilizante Garden" loading="lazy" className="product-image" />
          <div className="product-info">
            <p className="product-description">Fertilizante orgânico sem cheiro. Ideal para casas, jardins e ambientes fechados.</p>
            <div className="product-name-btn">
              <h3 className="product-name">Garden</h3>
              <a href="https://wa.me/554499612027" className="cta-button" target="_blank" rel="noopener noreferrer">
                Comprar
              </a>
            </div>
          </div>
        </div>

        <div className="product-card">
          <img src="src/assets/dreamfertil_organdream_25.avif" alt="Fertilizante Organdream 25kg" loading="lazy" className="product-image" />
          <div className="product-info">
            <p className="product-description">Fertilizante orgânico 100% natural, com certificação internacional. Rico em micro e macro nutrientes para enriquecer o solo da sua lavoura.</p>
            <div className="product-name-btn">
              <h3 className="product-name">Organdream 25kg</h3>
              <a href="https://wa.me/554499612027" className="cta-button" target="_blank" rel="noopener noreferrer">
                Comprar
              </a>
            </div>
          </div>
        </div>

        <div className="product-card">
          <img src="src/assets/dreamfertil_organdream_800.avif" alt="Fertilizante Organdream 800kg" loading="lazy" className="product-image" />
          <div className="product-info">
            <p className="product-description">Fertilizante orgânico 100% natural, com certificação internacional. Rico em nutrientes para o solo da sua lavoura.</p>
            <div className="product-name-btn">
              <h3 className="product-name">Organdream 800kg</h3>
              <a href="https://wa.me/554499612027" className="cta-button" target="_blank" rel="noopener noreferrer">
                Comprar
              </a>
            </div>
          </div>
        </div>

        <div className="product-card">
          <img src="src/assets/dreamfertil_outras-formulacoes.avif" alt="Formulações Especiais" loading="lazy" className="product-image" />
          <div className="product-info">
            <p className="product-description">Fertilizante feito sob medida, com adição de componentes minerais e biológicos, conforme a necessidade de cada solo.</p>
            <div className="product-name-btn">

              <h3 className="product-name">Outras formulações</h3>
              <a href="https://wa.me/554499612027" className="cta-button" target="_blank" rel="noopener noreferrer">
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
