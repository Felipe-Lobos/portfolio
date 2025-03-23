import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@heroui/react";
import { ThemeSwitcher } from "./heroUI/ThemeSwitcher";
import { useState } from "react";

export function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
  ];

  return (
    <Navbar 
    className="w-full"
      classNames={{
        base: "bg-transparent/50", // Hace el fondo transparente
        menu: "bg-background/90", // También puedes hacer transparente el wrapper
      }}
      shouldHideOnScroll
      isBlurred={false}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="text-inherit">Felipe Lobos</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground"  href="#">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Estudios
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
      <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
