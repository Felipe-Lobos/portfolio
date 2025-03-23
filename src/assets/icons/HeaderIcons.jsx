import { useThemeContext } from "../../context/ThemeContext";

export function LinkedinIcon() {
  const { theme } = useThemeContext();
  const isDarkMode = theme == "dark" ? true : false;
  return <></>;
}
