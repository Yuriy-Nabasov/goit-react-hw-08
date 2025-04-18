import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const navLinkClass = ({ isActive }) =>
  clsx(css.link, isActive && css.activeLink);

export default function AuthNav() {
  return (
    <div>
      <NavLink className={navLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={navLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
