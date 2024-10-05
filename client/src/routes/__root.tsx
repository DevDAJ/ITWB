import { createRootRoute, Outlet } from "@tanstack/react-router";
import "../index.css";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "../providers/ThemeProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <Navbar />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
