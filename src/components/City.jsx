import { Link, useParams } from "react-router-dom";

export function City({ city, onDeleteCity }) {
  const data = useParams();
  const { id, lat, long } = city;
  const isSelected = data.id === id;

  return (
    <li
      className={`w-3/4 h-10 flex items-center justify-between pr-2 rounded-lg bg-gray-500  ${
        isSelected && "border-green-600 border-2"
      }`}
    >
      <span className="w-1 h-8 rounded-lg bg-green-600"></span>
      <Link
        to={`${id}?lat=${lat}&long=${long}`}
        className="flex-1 flex items-center justify-around"
      >
        <span>{city.name}</span>
        <span className="">{`(${city.date})`}</span>
      </Link>
      <button
        className="bg-black px-2 rounded-full hover:bg-amber-500"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteCity(id);
        }}
      >
        &#x274C;
      </button>
    </li>
  );
}
