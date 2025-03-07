export const Footer = () => {
  return (
    <footer className="site-footer" id="SITE_FOOTER">
      <div className="footer-content">
        <p style={{
          textAlign: 'center',
          fontSize: '15px',
          lineHeight: '1.5em',
          margin: '1rem 0'
        }}>
          <a
            href="http://www.novai.com.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#333' }}
          >
            © Copyright 2025 - Todos os direitos reservados
          </a>
        </p>
      </div>
    </footer>
  );
};