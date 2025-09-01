function About() {
  return (
    <section className="about">
      <h2>Sobre mí</h2>
      <div className="about-content">
        <img src="/images/logo.png" alt="Eliana Gimenez" />
        <div className="about-text">
          <p>
            Soy una desarrolladora web apasionada por crear experiencias digitales modernas y funcionales.
            Tengo experiencia en desarrollo web con JavaScript, React JS y actualmente estoy cursando:
          </p>
          <ul>
            <li>Programación Backend I: Desarrollo Avanzado de Backend</li>
            <li>Programación Backend II: Diseño y Arquitectura Backend Flex</li>
            <li>Programación Backend III: Testing y Escalabilidad Flex</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
