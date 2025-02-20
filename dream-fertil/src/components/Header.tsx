import { Button } from "@mui/material";
import "./Header.css"
const navItems = ['Início', 'Quem somos', 'Fertilizantes', 'Certificação', 'Contato'];

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-img-container">
          <img className="header-logo-img" src="src/assets/download.png" alt="" height={"50px"} />
        </div>
        <div className="header-buttons-container">
          {navItems.map((item) => (
            <Button
              key={item}
              className="header-button"
              href={`#${item.toLowerCase().replace(' ', '-')}`}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
