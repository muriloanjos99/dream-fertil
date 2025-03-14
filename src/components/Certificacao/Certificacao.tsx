import './Certificacao.css';

export const Certificacao = () => {
  return (
    <section className="certification-container" id="certificacao">
      <img src="/logo_ceres.avif" alt="Certificação CERES" className="certification-logo" />
      <h2 className="certification-title">A única com <strong>certificação internacional</strong></h2>
      <p className="certification-text">
        A Dream Fértil é a única empresa brasileira com certificação internacional de fertilizante 100% orgânico via solo. O selo de qualidade é da Certification of Environmental Standards GmbH (CERES), certificação esta que nos permite exportar para os mercados mais exigentes do mundo, como o europeu e o norte-americano.
      </p>
    </section>
  );
}
