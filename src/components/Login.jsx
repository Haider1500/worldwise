export function Login() {
  return (
    <div className="bg-gray-700 w-full flex flex-1 items-center justify-center">
      <div className="bg-gray-500 min-h-80 min-w-96 p-10 grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="email" className="text-white block">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            value="ali@gmail.com"
            className="w-full py-2 px-4 bg-white text-black rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-white block">
            Password
          </label>
          <input
            type="password"
            id="password"
            value="alihaider"
            className="w-full py-2 px-4 bg-white  text-black rounded-md outline-slate-500"
          />
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded">
          LOGIN
        </button>
      </div>
    </div>
  );
}
