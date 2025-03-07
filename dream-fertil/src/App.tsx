import './App.css'
import { Certificacao } from './components/Certificacao/Certificacao';
import { FaleConosco } from './components/FaleConosco/FaleConosco';
import { Features } from './components/Features/Features';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Inicio } from './components/Inicio/Inicio';
import { Produtos } from './components/Produtos/Produtos';
import { QuemSomos } from './components/QuemSomos/QuemSomos';


function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Features />
      <QuemSomos />
      <Produtos />
      <Certificacao />
      <FaleConosco />
      <Footer />
    </>
  )
}

export default App
