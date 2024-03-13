import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="flex justify-center items-center">
      <div className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <motion.div
  animate={{ x: 100 }}
  transition={{ delay: 1 }}
>
  <div className="container lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white md:text-center md:flex md:flex-wrap justify-center items-center">
      <span>Hola, soy Mariana Isaac</span>
      <span className="inline-block lg:inline-block">
        Soy programadora Front End y me encanta construir aplicaciones web.
      </span>
    </h1>
    <p className="mb-8 leading-relaxed"></p>
    <div className="flex justify-center">
      <div>
        <a
          href="#contact"
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Contacto
        </a>
      </div>
      <div className="ml-4">
        <a
          href="#projects"
          className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
        >
          Mira mis trabajos
        </a>
      </div>
    </div>
  </div>
</motion.div>


        <div className="container lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
          <motion.img
            className="object-cover object-center mx-auto my-auto "
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

