import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link,
  Button
} from "@heroui/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@heroui/react";
import { ThemeSwitcher } from "./heroUI/ThemeSwitcher";

export function CustomNavbar() {
  return (
    <Navbar 
      className="w-full"
      classNames={{
        base: "bg-secondary-400/70  dark:bg-transparent/50 ",
        
      }}
      shouldHideOnScroll
      isBlurred={false}
    >
      <NavbarContent>
        <NavbarBrand>
          <p className="text-inherit">Felipe Lobos</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about-me">
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        {/* Dropdown para móvil */}
        <NavbarItem className="flex sm:hidden">
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="light" 
                isIconOnly
              >
                ☰
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Opciones de navegación">
              <DropdownItem key="about-me"
              textValue="Sobre mí">
                <Link className="w-full" href="#about-me">
                  Sobre mí
                </Link>
              </DropdownItem>
              <DropdownItem key="projects"
              textValue="Proyectos">
                <Link className="w-full" href="#projects">
                  Proyectos
                </Link>
              </DropdownItem>
              <DropdownItem key="contact"
              textValue="Contacto">
                <Link className="w-full" href="#contact">
                Contacto
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}