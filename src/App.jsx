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
      <div className="main-content">
        <header className="main-header my-5">
          <img
            src="./images/profile2.webp"
            className="border-4 border-content4"
            alt="Foto de perfil Felipe Lobos"
          />
          <article>
            <h1 className="text-4xl text-primary">Felipe Lobos Herrera</h1>
            <h3 className="text-2xl">Desarrollador Full Stack</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              voluptates, sed in non nobis neque iste consequuntur temporibus
              odio. Accusamus, hic. Laudantium pariatur explicabo eveniet
              adipisci neque blanditiis perferendis illum!
            </p>
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
                
                href={"https://www.linkedin.com/in/felipe-lobos-herrera/"}
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

        <section id="projects" className="projects flex flex-col gap-7">
          <h2>mis proyectos</h2>
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
        </section>
        <section id="about-me" className="about-me">
          <h2>Sobre mi</h2>
          <div className="flex flex-col">
            <Button color="default">Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
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
