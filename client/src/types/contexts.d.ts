interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
type Theme = "light" | "dark";
