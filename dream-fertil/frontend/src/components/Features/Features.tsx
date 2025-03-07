export const Features = () => {
  return (
    <section className="features-section">
      <div className="section-header">
        <h2>A <strong>melhor escolha</strong> para seu solo!</h2>
      </div>

      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="bi bi-egg-fried"></i>
          </div>
          <h3>Matéria-prima</h3>
          <p>Nossos fertilizantes orgânicos são produzidos a partir da cama de frango. Essa biomassa é rica em micro e macro nutrientes, como o nitrogênio, o fósforo e o potássio, que geram produtividade e longevidade à lavoura.</p>
          <a href="https://wa.me/554499612027" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Mais informações <i className="bi bi-arrow-down"></i>
          </a>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="bi bi-gear"></i>
          </div>
          <h3>Aplicação</h3>
          <p>Com um moderno processo industrial, unimos todos os nutrientes num único pellet. Desta forma, a nutrição do solo é feita de forma balanceada, promovendo o crescimento saudável e uniforme das plantas.</p>
          <a href="https://wa.me/554499612027" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Mais informações <i className="bi bi-arrow-down"></i>
          </a>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="bi bi-award"></i>
          </div>
          <h3>Certificação Internacional</h3>
          <p>Recebemos a certificação internacional da Ceres GmbH, exigida nos maiores mercados do mundo. Isso abre portas para que nossos parceiros e clientes exportem seus produtos para o mercado europeu e americano.</p>
          <a href="https://wa.me/554499612027" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Mais informações <i className="bi bi-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  )
}