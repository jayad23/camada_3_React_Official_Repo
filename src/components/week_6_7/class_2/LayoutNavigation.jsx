import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>
        <h1>Soy footer</h1>
      </footer>
    </div>
  )
}