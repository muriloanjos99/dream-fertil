export const FaleConosco = () => {
  return (
    < section className="contact-section" id="contato" >
      <h2 className="section-title">Fale conosco</h2>

      <div className="contact-grid">
        <div className="address-card">
          <h3>Endereço</h3>
          <div className="address-item">
            <strong>Escritório comercial</strong>
            <p>Rua Guarani, 391 - Maringá (PR)</p>
          </div>
          <div className="address-item">
            <strong>Fábrica</strong>
            <p>Estrada Bela Vista - Sitio Santa Rita, S/N, Quinta do Sol - PR</p>
          </div>
        </div>

        <div className="contact-info">
          <h3>Contato</h3>
          <div className="contact-item">
            <strong>Telefone</strong>
            <a href="tel:+5544999612027">+55 44 99961-2027</a>
          </div>
          <div className="contact-item">
            <strong>E-mail</strong>
            <a href="mailto:comercial@dreamfertil.com.br">comercial@dreamfertil.com.br</a>
          </div>
        </div>
      </div>

      <div className="social-links">
        <h3>Redes sociais</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/dreamfertil" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/dreamfertil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/dream-fertil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1ddados!2d-52.123456!3d-23.654321"
          loading="lazy"
          allowFullScreen
          aria-label="Localização no mapa">
        </iframe>
      </div>
    </section >
  )
}