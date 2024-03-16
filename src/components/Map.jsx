import { useNavigate } from "react-router-dom";

export function Map() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 text-black" onClick={() => navigate("form")}>
      I am Map
    </div>
  );
}
