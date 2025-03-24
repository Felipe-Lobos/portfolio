import { useEffect, useState } from "react";
import { Button, ButtonGroup, Link } from "@heroui/react";
import "./App.css";
import { CustomNavbar } from "./components/CustomNavbar";
import { useThemeContext } from "./context/ThemeContext.jsx";
import { ProjectCard } from "./components/ProjectCard.jsx";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";

function App() {
  const { theme } = useThemeContext();
  useEffect(() => {
    console.log("El tema cambió a:", theme);
  }, [theme]); // Se ejecuta cuando cambia el tema
  return (
    <>
      <CustomNavbar />
      <div className="main-content text-start">
        <header className="main-header mt-5">
          <img
            src="./images/profile2.webp"
            className="border-4 border-content4"
            alt="Foto de perfil Felipe Lobos"
          />
          <article>
            <h1 className="text-4xl font-semibold text-primary mb-3">
              Felipe Lobos Herrera
            </h1>
            <h3 className="text-2xl">Desarrollador Full Stack</h3>
            <p className="mb-3">En constante aprendizaje y descubrimiento.</p>
            <div className="header-links flex gap-3 flex-wrap ">
              <Button
                radius="full"
                className="text-xl p-5"
                // className="data-[hover]:bg-foreground/10"
                variant="ghost"
                as={Link}
                target="_blank"
                href={"https://www.linkedin.com/in/felipe-lobos-herrera/"}
              >
                <FaLinkedin className="" />
                Linkedin
              </Button>
              <Button
                radius="full"
                className=" text-xl p-5"
                // className="data-[hover]:bg-foreground/10"
                variant="ghost"
                as={Link}
                href={"https://github.com/Felipe-Lobos"}
              >
                <IoLogoGithub className="" />
                Github
              </Button>
              <Button
                radius="full"
                className=" text-xl p-5"
                // className="data-[hover]:bg-foreground/10"
                variant="ghost"
                as={Link}
                // target="_blank"
                href={"./CV_Felipe_Lobos_Herrera.pdf"}
                download={true}
              >
                <PiReadCvLogoFill className="" />
                CV
              </Button>
            </div>
          </article>
        </header>

        <section id="projects" className="projects  mt-14 ">
          <h2 className="text-3xl font-semibold">Mis proyectos</h2>
          <div className="flex flex-col gap-7 mt-3">
            <ProjectCard
              imageSrc={"./images/projects/typitaka.webp"}
              projectName={"TipyTaka"}
              title={"Juego de mecanografia"}
              description={`Reto de escritura rapida en diferentes lenguajes al estilo de MonkeyTypes.`}
              techStackList={["React", "CSSNew", "JavaScript"]}
              githubLink="https://github.com/Felipe-Lobos/typitaka"
              liveLink="https://felipe-lobos.github.io/typitaka/"
            />
            <ProjectCard
              imageSrc={"./images/projects/meal-finder.webp"}
              projectName={"Meal Finder"}
              title={"Buscador de recetas"}
              description={`Proyecto a modo de estudio que utiliza la API de https://www.themealdb.com/ para buscar, filtrar y mostrar las recetas`}
              techStackList={["React", "CSSNew", "JavaScript", "ChakraUI"]}
              liveLink="https://felipe-lobos.github.io/meal-finder-project/"
              githubLink="https://github.com/Felipe-Lobos/meal-finder-project"
            />
            <ProjectCard
              imageSrc={"./images/projects/inmuebles.webp"}
              projectName={"Inmuebles"}
              title={"Web full-stack de arriendos"}
              description={`Proyecto full-stack sobre arriendo de inmuebles, con autenticacion, perfiles de usuario filtros de busqueda y solicitudes de arriendo`}
              techStackList={[
                "HTML5",
                "CSSNew",
                "Python",
                "PostgreSQL",
                "Django",
              ]}
              githubLink="https://github.com/Felipe-Lobos/td_python_inmuebles"
            />
          </div>
        </section>
        <section id="about-me" className="about-me mt-14 text-start">
          <h2 className="text-3xl font-semibold">Sobre mi</h2>
          <div className="flex flex-col">
            <p>Work in progres</p>
          </div>
        </section>

        <footer>
          <Link href="">Código Portafolio</Link>
        </footer>
      </div>
    </>
  );
}

export default App;
