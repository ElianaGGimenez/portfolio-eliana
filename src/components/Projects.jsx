function Projects() {
  const proyectos = [
    {
      titulo: "SE Indumentaria y Accesorios",
      descripcion: "Tienda online desarrollada con React y Firebase.",
      link: "https://se-indumentaria-y-accesorios-main.vercel.app/index.html",
    },
    {
      titulo: "Wannabe",
      descripcion: "Proyecto de diseño web moderno.",
      link: "https://wannabegirlrust.vercel.app/",
    },
  ];

  return (
    <section className="projects">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((p, index) => (
          <div key={index} className="project-card">
            <h3>{p.titulo}</h3>
            <p>{p.descripcion}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
