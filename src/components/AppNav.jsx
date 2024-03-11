import { Link } from "react-router-dom";
import { Button } from "./Button";

export function AppNav() {
  return (
    <nav className="">
      <Link to={"cities"}>
        <Button>CITIES</Button>
      </Link>
      <Link to={"countries"}>
        <Button>COUNTRIES</Button>
      </Link>
    </nav>
  );
}
