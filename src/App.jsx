
import { Button, Link, Card, CardBody } from "@heroui/react";
import "./App.css";
import { CustomNavbar } from "./components/CustomNavbar";
import { ProjectCard } from "./components/ProjectCard.jsx";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";

function App() {
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
          <h2 className="text-3xl font-semibold text-primary-500/90">Mis proyectos</h2>
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
          <h2 className="text-3xl font-semibold text-primary-500/90 ">Sobre mí</h2>
          <div className="flex flex-col gap-3 align-center mt-3">
            <Card
              isBlurred
              className="border-none items-center dark:bg-gray-700/50 bg-secondary-400/20"
              shadow="sm"
            >
              <CardBody className="max-w-[80ch] flex flex-col items-center gap-3  py-6">
                <span className="self-start text-foreground/70">Volviendo a empezar</span>
                <p>
                  Hola, soy Felipe Lobos,{" "}
                  <strong className="font-bold	 text-primary-700/80">
                    técnico en informática y desarrollador full-stack.
                  </strong>{" "}
                  Si bien estuve estos últimos años desempeñándome en diversos
                  rubros y enfocándome en otras áreas de la vida, hoy retomo a
                  donde había quedado, a lo que me motiva.
                </p>
                <p>
                  ¿Qué me gusta? Que las cosas funcionen como corresponde, es
                  por eso{" "}
                  <strong className="font-bold	 text-primary-700/80">
                    siempre pongo especial atención en cada detalle,
                  </strong>{" "}
                  creando soluciones de calidad, productos que yo usaría.
                </p>
                <p>
                  ¿Mis puntos fuertes?{" "}
                  <strong className="font-bold	 text-primary-700/80">
                    La lógica y el pensamiento analítico son cualidades que
                    siempre destaco.
                  </strong>{" "}
                  Estas habilidades son esenciales en mi día a día para resolver
                  problemas y tomar decisiones, y disfruto aplicarlas en la
                  programación.
                </p>
              </CardBody>
            </Card>
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
