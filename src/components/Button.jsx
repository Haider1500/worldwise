export function Button({ children, customClass, onClick }) {
  return (
    <button
      className={`p-2 text-sm rounded-md ${customClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
