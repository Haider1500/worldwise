import { Navbar } from "./Navbar";

export function Product() {
  return (
    <div className="bg-gray-700 w-full flex items-center justify-center flex-1 flex-col gap-20">
      {/* <Navbar /> */}
      <div className="flex w-3/4 self-center items-center gap-10">
        <img src="./src/assets/bg.jpg" alt="" className="flex-1" />
        <div className="flex flex-col flex-1 gap-6 text-white text-left">
          <h2 className="font-bold text-4xl">About WorldWise</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            mollis neque non hendrerit pellentesque. Sed maximus, orci id
            pharetra rhoncus, enim tortor dictum leo, vel lacinia arcu purus sit
            amet nisi. In imperdiet, lorem non vulputate faucibus, lectus felis
            congue urna, vitae vulputate mi justo convallis nisi. Sed consequat
            tempus fringilla. Nam vehicula metus non hendrerit ornare. Etiam
            aliquet vel nisl at venenatis. Aenean condimentum volutpat lobortis.
            In sit amet
          </p>
        </div>
      </div>
    </div>
  );
}
