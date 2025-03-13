import './FaleConosco.css';

export const FaleConosco = () => {
  return (
    <section className="contact-container" id="contato" >
      <h2 className="contact-title">Fale conosco</h2>

      <div className="contact-grid">
        <div className="address-card">
          <h3>Endereço</h3>
          <div className="address-item">
            <strong>Escritório comercial</strong>
            <p>Rua Guarani, 391 - Maringá - PR</p>
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
            <p>+55 44 99961-2027</p>
          </div>
          <div className="contact-item">
            <strong>E-mail</strong>
            <p>comercial@dreamfertil.com.br</p>
          </div>
        </div>
        <div className="social-links">
          <h3>Redes sociais</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/dreamfertil" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook">
                <img src="src/assets/facebook_logo.avif" alt="" />
              </i>
            </a>
            <a href="https://www.instagram.com/dreamfertil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram">
                <img src="src/assets/insta_logo.avif" alt="" />
              </i>
            </a>
            <a href="https://www.linkedin.com/company/dream-fertil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin">
                <img src="src/assets/linkedin_logo.avif" alt="" />
              </i>
            </a>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12849.261018789384!2d-52.143025232958244!3d-23.847430751270686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed05441d1df64b%3A0x279e79a63bc07603!2sDream%20F%C3%A9rtil%20-%20F%C3%A1brica!5e0!3m2!1spt-BR!2sbr!4v1741644264424!5m2!1spt-BR!2sbr" width="980" height="400" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section >
  )
}