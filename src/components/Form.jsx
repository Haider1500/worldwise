import { useNavigate } from "react-router-dom";
import { useCities } from "./CitiesContext";
import { useState } from "react";

import { Button } from "./Button";

const khushab = {
  name: "Khushab",
  country: "America",
  date: "Mar,12,2010",
  lat: 90,
  long: 56,
};
export function Form({ city = khushab }) {
  const [cities, setCities] = useCities();
  const navigate = useNavigate();

  const [notes, setNotes] = useState();

  function handleAddCity(e) {
    e.preventDefault();
    setCities([...cities, { ...city, notes: notes, id: crypto.randomUUID() }]);
    navigate(-1);
  }

  return (
    <form
      action=""
      className="flex flex-col bg-gray-600 p-4 rounded-lg gap-2 w-10/12 md:w-6/12"
      onSubmit={handleAddCity}
    >
      <label htmlFor="" className="label">
        <span className="">City Name</span>
        <input
          type="text"
          name=""
          id=""
          readOnly
          value={city?.name}
          className="rounded-md h-8 text-black outline-none px-2"
        />
      </label>
      <label htmlFor="" className="label">
        <span>When did you go to {city?.name}?</span>
        <input
          type="text"
          name=""
          id=""
          readOnly
          className="rounded-md h-8 outline-none text-black px-2"
          value={city?.date}
        />
      </label>
      <label htmlFor="" className="label">
        <span>Notes about your trip to {city?.name}?</span>
        <input
          type="text"
          name=""
          id=""
          className="h-14 outline-none rounded-md text-black px-2"
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <div className="flex justify-between mt-2">
        <Button
          customClass={
            "bg-green-600 text-black font-semibold hover:bg-green-500"
          }
        >
          ADD
        </Button>
        <Button
          customClass={"border-2 hover:bg-gray-800"}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; BACK
        </Button>
      </div>
    </form>
  );
}
