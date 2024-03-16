import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./Button";
import { useContext } from "react";
import { CitiesContext } from "./CitiesContext";

export function CityDetails() {
  const navigate = useNavigate();
  const [cities] = useContext(CitiesContext);
  // const [, setSearchParams] = useSearchParams();
  let { id } = useParams();

  const [city] = cities.filter((city) => String(city.id) === id);

  // const { lat, long } = city;
  return (
    <form className="flex flex-col bg-gray-600 py-4 px-8 w-10/12  rounded-md text-sm gap-2 items-start">
      <h2 className="grey">CITYNAME</h2>
      <p>{city.name}</p>
      <h2 className="grey">YOU WENT TO X ON</h2>
      <p>{city.date}</p>
      <h2 className="grey">YOUR NOTES</h2>
      <p>{city?.notes}</p>
      <h2 className="grey">LEARN MORE</h2>
      <a href="x" className="block text-yellow-400 underline">
        Xlink&rarr;
      </a>
      <Button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        customClass={"border-2"}
      >
        &larr;BACK
      </Button>
    </form>
  );
}
