export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4">
      <div className="px-5 py-10 mx-auto flex justify-center mb-10">
        <div className="lg:w-1/2 md:w-2/3 w-full flex flex-col items-center">
          <h2 className="text-white sm:text-4xl text-3xl mb-5 font-medium title-font">
            ¡Contácteme!
          </h2>
          <p className="leading-relaxed flex justify-center mb-5">
            ¿Necesitas una desarrolladora Frontend para tu proyecto? ¡Contáctame
            ahora mismo!
          </p>
          <iframe
            className="container "
            src="https://docs.google.com/forms/d/e/1FAIpQLSdszhOr63sSfNHsaYVkzo_ZkYcJJPILYiHT1CYwCB8_-PWKfg/viewform?embedded=true"
            width="auto"
            height="1010"
          >
            Cargando…
          </iframe>
        </div>
      </div>
    </section>
  );
}
