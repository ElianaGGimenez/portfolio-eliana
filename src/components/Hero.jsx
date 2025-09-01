function Hero() {
  return (
    <section className="hero">
      <h2 className="hero-title">
        Hola, soy <span className="highlight">Eliana Gimenez</span>
      </h2>
      <p className="hero-subtitle">
        Desarrolladora Web | React | JavaScript | Backend en formación
      </p>
      import { Link } from "react-router-dom";
      <Link to="/proyectos" className="hero-button">Ver mis proyectos</Link>
    </section>
  );
}

export default Hero;
