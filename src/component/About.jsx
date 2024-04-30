import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useEffect, useState } from "react";

export const About = () => {
  const socialLinks = [
    {
      label: "GitHub",
      url: "https://github.com/misaac1001",
      icon: <GitHubIcon className="mr-2" />,
      bgColor: "bg-pink-500",
      hoverColor: "hover:bg-pink-300",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/mariana-isaac10",
      icon: <OpenInNewIcon className="mr-2" />,
      bgColor: "bg-pink-400",
      hoverColor: "hover:bg-pink-300",
    },
    {
      label: "Descargar CV",
      url: "https://drive.google.com/file/d/1_M6_QqM70ICXeN0Kigmrlhf5mD9XNPdj/view",
      icon: <CloudDownloadIcon className="mr-2" />,
      bgColor: "bg-pink-300",
      hoverColor: "hover:bg-pink-200",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando la página se desplace una cierta distancia
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función para desplazarse hasta la parte superior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className="container mx-auto mt-40 px-4">
      <div className="px-5 py-10 mx-auto lg:px-20">
        <div className="flex flex-wrap justify-start gap-x-4 items-center">
          <img
            className="rounded-full w-20 h-20"
            src="https://res.cloudinary.com/daupcpuqs/image/upload/v1706875738/Portafolio/CV_Mariana_Isaac_-_desarrolladora_ztxr0h.png"
            alt="Mariana Isaac foto de perfil"
          />
          <span className="p-1 rounded-full">
            <CheckCircleIcon
              style={{ fontSize: "2rem", color: "rgb(219 39 119)" }}
            />
          </span>
          <button
            onClick={() =>
              window.open("https://linkedin.com/in/mariana-isaac10/", "_blank")
            }
            className="text-white mt-4 lg:mt-0 bg-pink-600 border-0 px-5 focus:outline-none hover:bg-pink-300 text-md flex items-center justify-center rounded-full"
            style={{ height: "2rem" }}
          >
            Disponible para trabajar
          </button>
        </div>
        <h1 className="text-white text-4xl md:text-5xl font-bold flex flex-row gap-x-4 py-4">
          Soy Mariana 
        </h1>
        <div className="flex flex-col py-4 ">
          <h2 className="text-lg md:text-xl ">
            <span className="text-pink-400">
              Desarrolladora Frontend con React JS
            </span>{" "}
            de CABA, Argentina. Mi pasión está en transformar ideas en
            experiencias digitales cautivadoras ✨. Con una base en
            administración y un entusiasmo recién descubierto por el desarrollo
            frontend, me aventuro a crear soluciones web que combinen
            funcionalidad y diseño.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start py-4 ">
          {socialLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => window.open(link.url, "_blank")}
              className={`${link.bgColor} ${link.hoverColor} text-white font-bold py-2 px-2 rounded flex  m-2`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-2 right-2 z-10 p-2 rounded-full text-white bg-pink-500 hover:bg-pink-400 transition duration-300 ease-in-out ${
          isVisible ? "inline-flex" : "hidden"
        }`}
      >
        <KeyboardDoubleArrowUpIcon />
      </button>
    </section>
  );
};
