import "./Header.css"

const navItems = [
  { id: 'inicio', label: 'Início', link: '' },
  { id: 'quem-somos', label: 'Quem somos', link: '' },
  { id: 'fertilizantes', label: 'Fertilizantes', link: '' },
  { id: 'certificacao', label: 'Certificação', link: '' },
  { id: 'contato', label: 'Contato', link: '' },
];

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <a href="" target="_self" className="header-logo-link">
          <img className="header-logo-img" src="src/assets/dreamfertil_logo.avif" alt="" />
        </a>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="header-nav-item">
              <a href={item.link} target="_self" className="header-nav-link">
                <p className="header-nav-text">{item.label}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header >
  );
}
