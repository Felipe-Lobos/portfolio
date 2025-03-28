/* eslint-disable react/prop-types */
import { Card, CardBody, Button, Image, Link } from "@heroui/react";
import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";
import { TechStackIcon } from "./TechStackIcon";

export function ProjectCard({
  imageSrc,
  projectName,
  title,
  description,
  liveLink = "",
  githubLink = "",
  techStackList = [],
}) {
  // console.log(imageSrc,projectName)
  return (
    <Card
      isBlurred
      className="border-none dark:bg-primary-100/10 bg-secondary-400/20"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6  items-center justify-center ">
          <div className="relative col-span-6 md:col-span-5">
            <Image
              isZoomed
              alt="Album cover"
              className="object-cover"
              height={250}
              shadow="sm"
              src={imageSrc}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-7 justify-between h-full gap-5">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-lg text-foreground/90">
                  {projectName}
                </h3>
                <h1 className="text-2xl font-medium mt-2">{title}</h1>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="text-md text-foreground/80"
                >
                  {description}
                </p>
              </div>
              {/* <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"

              >
                cora
              </Button> */}
            </div>
            <div className="techstack flex gap-5">
              {techStackList.map((techStack) => (
                <TechStackIcon key={techStack} techStackName={techStack} />
              ))}
            </div>
            {/* <div className="flex flex-col mt-3 gap-1">
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div> */}

            <div className="flex w-full items-center justify-start gap-5">
              {liveLink && (
                <Button
                  // className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="ghost"
                  as={Link}
                  target="_blank"
                  href={liveLink}
                >
                  <VscLinkExternal />
                  Live
                </Button>
              )}

              {githubLink && (
                <Button
                  // className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="ghost"
                  as={Link}
                  target="_blank"
                  href={githubLink}
                >
                  <VscGithubAlt />
                  Código
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
