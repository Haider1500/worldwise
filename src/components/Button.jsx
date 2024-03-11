export function Button({ children, customClass }) {
  return (
    <button
      className={`bg-gray-800 hover:bg-gray-500 p-2 rounded-lg ${customClass}`}
    >
      {children}
    </button>
  );
}
