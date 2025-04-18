import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

const navLinkClass = ({ isActive }) =>
  clsx(css.link, isActive && css.activeLink);

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={navLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={navLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
