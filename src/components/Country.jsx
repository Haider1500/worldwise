export function Country({ country }) {
  return (
    <div className="min-w-32 relative flex min-h-24 rounded-lg items-center justify-center bg-gray-500">
      <span className="bg-yellow-800 w-2  min-h-24 absolute left-0 rounded-lg"></span>
      <span className="font-semibold text-lg">{country}</span>
    </div>
  );
}
