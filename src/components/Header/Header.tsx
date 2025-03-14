import { useState } from 'react';
import "./Header.css"

const navItems = [
  { id: 'inicio', label: 'Início', link: '/#inicio' },
  { id: 'quem-somos', label: 'Quem somos', link: '/#quem-somos' },
  { id: 'fertilizantes', label: 'Fertilizantes', link: '/#produtos' },
  { id: 'certificacao', label: 'Certificação', link: '/#certificacao' },
  { id: 'contato', label: 'Contato', link: '/#contato' },
  { id: 'blog', label: 'Blog', link: '/blog' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="header-logo">
        <a href="/" target="_self" className="header-logo-link">
          <img className="header-logo-img" src="/dreamfertil_logo.avif" alt="" />
        </a>
      </div>

      <button
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="toggle-icon"></span>
      </button>

      <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="header-nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="header-nav-item">
              <a
                href={item.link}
                target="_self"
                className="header-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="header-nav-text">{item.label}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header >
  );
}