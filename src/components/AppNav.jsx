import { NavLink } from "react-router-dom";

export function AppNav() {
  return (
    <nav className="">
      <NavLink to={"cities"} className={"p-2 rounded-md bg-gray-600"}>
        CITIES{" "}
      </NavLink>
      <NavLink to={"countries"} className={"p-2 rounded-md bg-gray-600"}>
        COUNTRIES
      </NavLink>
    </nav>
  );
}
