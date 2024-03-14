import { motion } from "framer-motion";

export const About = () => {
  const navigateToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section id="about" className="flex justify-center items-center container">
      <div className="container mx-auto flex py-20 md:flex-row flex-col justify-center items-center">
        <div class="container lg:flex-grow lg:w-3/4 2xl:w-4/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center sm:items-center">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-center flex flex-wrap justify-center items-center w-full">
    <span class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
      PROGRAMADORA FRONT-END
    </span>
    <span class="w-full text-base sm:text-lg md:text-xl lg:text-2xl">
      MARIANA ISAAC
    </span>
  </h1>
  <p class="mb-8 leading-relaxed"></p>
  <div class="container flex justify-center w-full space-x-4">
  <button
    onClick={() => navigateToSection('contact')}
    class="inline-flex justify-center text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg flex-grow lg:w-auto md:w-1/2 sm:w-full"
  >
    Contacto
  </button>
  <button
    onClick={() => navigateToSection('projects')}
    class="inline-flex justify-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg flex-grow lg:w-auto md:w-1/2 sm:w-full"
  >
    Trabajos
  </button>
  </div>
</div>
<div className="container lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
  <motion.img
    className="object-cover object-center rounded-full mx-auto my-auto w-3/4 md:w-2/2 sm:w-2/4"
    alt="hero"
    src="https://res.cloudinary.com/daupcpuqs/image/upload/v1706875738/Portafolio/CV_Mariana_Isaac_-_desarrolladora_ztxr0h.png"
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["50%", "20%", "20%", "20%", "50%"],
    }}
    transition={{ duration: 2 }}
  />
</div>
      </div>
    </section>
  );
};
