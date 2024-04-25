import { useEffect } from "react";
import "./navbar.css";
export function Navbar() {
  const navItems = [
    {
      title: "Proyectos",
      label: "proyectos",
      url: "#projects",
    },
    {
      title: "Habilidades",
      label: "habilidades",
      url: "#skills",
    },
    {
      title: "Sobre mi",
      label: "sobre-mi",
      url: "#about",
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "#contact",
    },
  ];

  useEffect(() => {
    // Función para manejar el desplazamiento
    const handleScroll = (event) => {
      event.preventDefault(); // Previene el comportamiento por defecto del enlace
      const targetId = event.target.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      // Ajusta la posición de scroll para la altura del nav
      const offset = 10; // Altura del nav en píxeles
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };

    // Agrega el evento de click a todos los enlaces del nav
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    // Limpia el evento al desmontar el componente
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <nav className="fixed top-6 z-10  left-1/2 -translate-x-1/2 px-2 rounded-full">
      <ul className="inline-flex justify-center items-center  list-none p-0 m-0 w-full ">
        {navItems.map((link) => (
          <li
            key={link.label}
            className="relative block px-2 py-2 transition hover:text-pink-400 whitespace-nowrap"
          >
            <a
              href={link.url}
              className="text-white hover:text-pink-500 no-underline text-md px-3"
              aria-label={link.label}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
