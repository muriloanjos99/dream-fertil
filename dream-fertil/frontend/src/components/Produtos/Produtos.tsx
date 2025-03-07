export const Produtos = () => {
  return (
    <section className="products-section" id="fertlizantes">
      <h2 className="section-title">Nossos produtos</h2>

      <div className="products-grid">
        <div className="product-card">
          <img src="caminho/3.png" alt="Fertilizante Garden" loading="lazy" className="product-image" />
          <h3 className="product-name">Garden</h3>
          <p className="product-description">Fertilizante orgânico sem cheiro. Ideal para casas, jardins e ambientes fechados.</p>
          <a href="https://wa.me/554499612027" className="cta-button" target="_blank" rel="noopener noreferrer">
            Comprar <i className="bi bi-whatsapp"></i>
          </a>
        </div>

        <div className="product-card">
          <img src="caminho/1.png" alt="Fertilizante Organdream 25kg" loading="lazy" className="product-image" />
          <h3 className="product-name">Organdream 25kg</h3>
          <p className="product-description">Fertilizante orgânico 100% natural com certificação internacional. Rico em micro e macro nutrientes.</p>
          <a href="https://wa.me/554499612027" className="cta-button" target="_blank" rel="noopener noreferrer">
            Comprar <i className="bi bi-whatsapp"></i>
          </a>
        </div>

        <div className="product-card">
          <img src="caminho/2.png" alt="Fertilizante Organdream 800kg" loading="lazy" className="product-image" />
          <h3 className="product-name">Organdream 800kg</h3>
          <p className="product-description">Fertilizante orgânico 100% natural com certificação internacional para grandes lavouras.</p>
          <a href="https://wa.me/554499612027" className="cta-button" target="_blank" rel="noopener noreferrer">
            Comprar <i className="bi bi-whatsapp"></i>
          </a>
        </div>

        <div className="product-card">
          <img src="caminho/4.png" alt="Formulações Especiais" loading="lazy" className="product-image" />
          <h3 className="product-name">Outras formulações</h3>
          <p className="product-description">Fertilizante personalizado com componentes minerais e biológicos conforme necessidade do solo.</p>
          <a href="https://wa.me/554499612027" className="cta-button" target="_blank" rel="noopener noreferrer">
            Saiba mais <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
