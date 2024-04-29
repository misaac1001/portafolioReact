import { projects } from "../data";

function Projects() {
  return (
    <section
      id="projects"
      className="container rounded-lg shadow-gray-400/50 mx-auto mt-30 w-full "
    >
      <div className="px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Mis trabajos
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Les muestro un poco de mi camino recorrido
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="text-pink-400 title-font text-lg font-medium  mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
