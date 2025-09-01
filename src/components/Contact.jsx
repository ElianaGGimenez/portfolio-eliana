import { useState } from "react";

function Contact() {
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = () => {
    navigator.clipboard.writeText("eliigimenez@hotmail.com");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000); // mensaje desaparece en 2 segundos
  };

  return (
    <section className="contact">
      <h2>Contacto</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          <span className="copiable" onClick={copiarEmail}>
            eliigimenez@hotmai.com
          </span>
        </p>
        {copiado && <p className="copiado-msg">¡Email copiado al portapapeles!</p>}
        <p>
          <strong>Teléfono:</strong>{" "}
          <a href="tel:+5491123456789">+54 9 11 2345-6789</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
