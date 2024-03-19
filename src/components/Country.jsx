export function Country({ country }) {
  return (
    <div className="min-w-32 relative flex min-h-24 rounded-lg items-center justify-center bg-gray-500 border-l-4 border-yellow-500">
      <span className="font-semibold text-lg">{country}</span>
    </div>
  );
}
