import { useState, useEffect, useContext, createContext } from "react";

const BASE_URL = "http://localhost:3001";
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch(`${BASE_URL}/citiesData`);
      const data = await res.json();
      if (data.length > 0) setCities(data);
    }
    getData();
  }, []);
  return (
    <CitiesContext.Provider value={[cities, setCities]}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const citiesContext = useContext(CitiesContext);
  return citiesContext;
}

export { CitiesProvider, useCities };
