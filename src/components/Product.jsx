import { Navbar } from "./Navbar";

export function Product() {
  return (
    <div className="bg-gray-700 flex flex-1 items-center h-full flex-col gap-10 sm:gap-20">
      <Navbar />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <main className="flex w-11/12 md:w-3/4 self-center items-center gap-10">
      <img
        src="./src/assets/bg.jpg"
        alt=""
        className="object-contain w-5/12 sm:w-6/12 md:flex-1 self-end md:self-auto"
      />
      <div className="flex flex-col flex-1 md:gap-6 gap-4 text-white text-left">
        <h2 className="font-bold text-3xl">About WorldWise</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis
          neque non hendrerit pellentesque. Sed maximus, orci id pharetra
          rhoncus, enim tortor dictum leo, vel lacinia arcu purus sit amet nisi.
          In imperdiet, lorem non vulputate faucibus, lectus felis congue urna,
          vitae vulputate mi justo convallis nisi. Sed consequat tempus
          fringilla. Nam vehicula metus non hendrerit ornare. Etiam
        </p>
      </div>
    </main>
  );
}
