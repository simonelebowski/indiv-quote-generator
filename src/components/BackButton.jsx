export default function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#f5f5f5] hover:bg-[#fafafa] text-[#424242] font-semibold py-2 px-4 border rounded transition-all w-36"
    >
      BACK
    </button>
  );
}

// export default function BackButton({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
//     >
//       BACK
//     </button>
//   );
// }
