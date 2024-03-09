// import { Map } from "./Map";
import { SideBar } from "./SideBar";
// other 60% is map using the geolocation api can search our own location
// select the place and include in the list of cities by fetching the name using the external api. when did we go there so a date is fetched for that.
// a marker is placed on the map for that we can click it and cross it also

// a logout button is displayed at the top right of the screen with a random avatar and welcome msg

export function AppLayout() {
  return (
    <div className="flex flex-1 text-white">
      <SideBar />
      {/* <Map /> */}
    </div>
  );
}
