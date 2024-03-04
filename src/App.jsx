import "./App.css";

//white wrapper
// three pages PRODUCT PRICING LOG IN
//login box EMail and password init
//40% app box containing cities and countries visited
// countries and cities should have different routes
// city box should be smaller containing city flag, name and date and x button to delete it
// countries with slightly larger box but no date written there
// when we click the city map itself moves there and a card is displayed containing the info we put there

// other 60% is map using the geolocation api can search our own location
// select the place and include in the list of cities by fetching the name using the external api. when did we go there so a date is fetched for that.
// a marker is placed on the map for that we can click it and cross it also

// a logout button is displayed at the top right of the screen with a random avatar and welcome msg
const url = "./src/assets/worldwise-bg.jpg";

function App() {
  return (
    <div className="bg-white p-6 h-dvh flex relative">
      <Home />
    </div>
  );
}

export default App;

function Home() {
  return (
    <div className="flex flex-col w-full h-full relative px-10 text-white border-2 bg-gray-900 opacity-80">
      <div
        className="absolute w-full bg-no-repeat bg-cover bg-black inset-0 opacity-60
      "
        style={{ backgroundImage: `url("${url}")` }}
      />
      <Navbar />
      <Main />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex items-center justify-between relative">
      <Logo />
      <Links />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center p-2">
      <img src="./src/assets/logo.png" alt="" className="w-24" />
      <h2 className="text-3xl font-bold">WorldWise</h2>
    </div>
  );
}

function Links() {
  return (
    <ul className="flex mr-6 gap-10 items-center font-bold text-xl">
      <li>PRODUCT</li>
      <li>PRICING</li>
      <button className="px-4 py-2 rounded-md bg-green-600 text-black">
        LOG IN
      </button>
    </ul>
  );
}

function Main() {
  return (
    <div className="relative flex flex-col flex-1 self-center items-center justify-center mb-20 gap-10 w-3/4 text-4xl">
      <h2>You travel the world.</h2>
      <h2>WorldWise keeps the track of your adventures.</h2>
      <p className="text-2xl text-center">
        A world map that tracks your footsteps into evry city you can think of.
        Never forget your wonderful experices, and show your friends how you
        have wondered the world.
      </p>
      <button className="bg-green-600 px-6 py-2 rounded-lg text-2xl text-black font-bold">
        START TRACKING NOW
      </button>
    </div>
  );
}
