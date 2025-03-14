import './Features.css';

export const Features = () => {
  return (
    <section className="features-container">
      <div className="features-title">
        <h2>A <strong>melhor escolha</strong> para seu solo!</h2>
      </div>

      <div className="features-content">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="materia-icon">
              <svg preserveAspectRatio="xMidYMid meet" data-bbox="8.4 63.7 183.1 65" viewBox="8.4 63.7 183.1 65" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                <g>
                  <path d="M101.3 80.4c-4.2 2.2-11.4 6.3-11.4 6.3-11-7.1-40.2-22.7-81.5-23v8.5c36.2.3 62.2 12.8 74.1 20-4.6 3.4-8.9 7.2-12.9 11.3-20.1-13-42.7-17.1-61.2-17.9v8.6c16.9.7 37.2 4.5 55.3 15.7-3.1 3.6-5.9 7.5-8.4 11.5-14.8-6.8-30.7-11.1-46.9-12.7v8.7c14.5 1.5 28.7 5.3 42.1 11.3h10.4C70.5 112.1 85.8 98 105.2 88c25.7-13.2 56.3-18.1 86.2-14.1v-8.6c-31.2-4-63.2 1.2-90.1 15.1z" data-color="1"></path>
                  <path d="M116.7 101.7c-12.7 6.4-23.8 15.7-32.5 27h11.1c7.2-8 15.8-14.5 25.3-19.4C141.4 98.6 166.8 95 191.4 99v-8.7c-26-3.9-52.7 0-74.7 11.4z" data-color="1"></path>
                  <path d="M123.1 128.6h19.4c13.7-4.9 30.1-6.6 49-5.1V115c-27.9-2.2-50.9 2.4-68.4 13.6z" data-color="1"></path>
                </g>
              </svg>
            </i>
          </div>
          <h3 className='feature-card-title'>Matéria-prima</h3>
          <p className='feature-card-description'>Nossos fertilizantes orgânicos são produzidos a partir da cama de frango. Essa biomassa é rica em micro e macro nutrientes, como o nitrogênio, o fósforo e o potássio, que geram produtividade e longevidade à lavoura.</p>
          <a href="https://wa.me/554499612027" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Mais informações
          </a>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="alvo-icon">
              <svg preserveAspectRatio="xMidYMid meet" data-bbox="29.5 29.5 141 141" viewBox="29.5 29.5 141 141" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                <g>
                  <path d="M100 29.5c-38.874 0-70.5 31.626-70.5 70.5s31.626 70.5 70.5 70.5 70.5-31.626 70.5-70.5-31.626-70.5-70.5-70.5zm0 133c-34.463 0-62.5-28.037-62.5-62.5S65.537 37.5 100 37.5s62.5 28.037 62.5 62.5-28.037 62.5-62.5 62.5zm0-106.4c-24.207 0-43.9 19.693-43.9 43.9s19.693 43.9 43.9 43.9 43.9-19.693 43.9-43.9-19.693-43.9-43.9-43.9zm0 79.8c-19.796 0-35.9-16.104-35.9-35.9S80.204 64.1 100 64.1s35.9 16.104 35.9 35.9-16.104 35.9-35.9 35.9zm0-53.2c-9.539 0-17.3 7.761-17.3 17.3s7.761 17.3 17.3 17.3 17.3-7.761 17.3-17.3-7.761-17.3-17.3-17.3zm0 26.6c-5.128 0-9.3-4.172-9.3-9.3s4.172-9.3 9.3-9.3 9.3 4.172 9.3 9.3-4.172 9.3-9.3 9.3z" data-color="1"></path>
                </g>
              </svg>
            </i>
          </div>
          <h3 className='feature-card-title'>Aplicação</h3>
          <p className='feature-card-description'> Com um moderno processo industrial, unimos todos os nutrientes num único pellet. Desta forma, a nutrição do solo é feita de forma balanceada, promovendo o crescimento saudável e uniforme das plantas.</p>
          <a href="https://wa.me/554499612027" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Mais informações
          </a>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="check-icon">
              <svg preserveAspectRatio="none" data-bbox="20 40.771 160 118.458" viewBox="20 40.771 160 118.458" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                <g>
                  <path d="M177.823 42.952c-1.404-1.406-3.272-2.181-5.26-2.181s-3.856.775-5.259 2.179l-98.323 98.322-36.283-36.28c-1.404-1.406-3.272-2.181-5.26-2.181s-3.856.775-5.258 2.178a7.383 7.383 0 0 0-2.18 5.259c0 1.988.774 3.855 2.179 5.259l41.543 41.543a7.488 7.488 0 0 0 5.259 2.179 7.486 7.486 0 0 0 5.259-2.179L177.82 53.468c1.406-1.404 2.18-3.272 2.18-5.259s-.774-3.856-2.177-5.257z"></path>
                </g>
              </svg>
            </i>
          </div>
          <h3 className='feature-card-title'> Certificação Internacional</h3>
          <p className='feature-card-description'> Recebemos a certificação internacional da Ceres GmbH, exigida nos maiores mercados do mundo. Isso abre portas para que nossos parceiros e clientes exportem seus produtos para o mercado europeu e americano.</p>
          <a href="https://wa.me/554499612027" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Mais informações
          </a>
        </div>
      </div>
    </section>
  )
}