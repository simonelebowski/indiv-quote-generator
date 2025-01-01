export default function ContinueButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#e0a83c] hover:bg-[#c38d35] text-white font-bold py-2 px-4 border rounded transition-all w-36"
    >
      CONTINUE
    </button>
  );
}
