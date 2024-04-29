
export function Contact() {
  
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex justify-center mb-10">
        <div className="lg:w-1/2 md:w-2/3 w-full flex flex-col items-center">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¡Contácteme!
          </h2>
          <p className="leading-relaxed mb-5">
            ¿Necesitas una desarrolladora Frontend para tu proyecto? ¡Contáctame ahora mismo!
          </p>
          <a
            href="mailto:marian.isaac10@gmail.com"
            className="text-white bg-pink-600 border-0 px-5 py-2 focus:outline-none hover:bg-pink-300 text-md rounded-full"
          >
            marian.isaac10@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}