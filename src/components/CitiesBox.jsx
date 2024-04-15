import { City } from "./City";
import { useCities } from "./CitiesContext";

export function CitiesBox() {
  const [cities, setCities] = useCities();
  if (!cities.length) return "Add cities to the list 😆";

  function handleDeleteCity(id) {
    console.log(id);
    const newCities = cities.filter((city) => city.id !== id);
    setCities(newCities);
  }

  return (
    <ul className="w-full flex flex-col items-center gap-4 ">
      {cities.map((city) => (
        <City city={city} key={city.id} onDeleteCity={handleDeleteCity} />
      ))}
    </ul>
  );
}
