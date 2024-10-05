import { Link } from "@tanstack/react-router";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="flex bg-primary-200 dark:bg-primary-950 h-20 items-center justify-center p-9">
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button className="ml-auto" onClick={() => toggleTheme()}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
