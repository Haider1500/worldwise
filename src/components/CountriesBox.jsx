import { useContext } from "react";
import { Country } from "./Country";
import { CitiesContext } from "./CitiesContext";

export function CountriesBox() {
  const [cities] = useContext(CitiesContext);
  const countries = cities.reduce((arr, city) => {
    if (arr.includes(city.country)) return arr;
    else {
      return [...arr, city.country];
    }
  }, []);

  if (!countries.length) return "Add countries to the list 😆";

  return (
    <ul className="flex flex-wrap gap-3 items-center justify-center ">
      {countries.map((country) => (
        <Country country={country} key={country} />
      ))}
    </ul>
  );
}
