import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to={"/"}>
      <div className="flex items-center p-1">
        <img src="./src/assets/logo.png" alt="" className="w-20" />
        <h2 className="text-3xl font-bold">WorldWise</h2>
      </div>
    </Link>
  );
}
