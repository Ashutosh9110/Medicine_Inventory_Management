import { useContext } from "react";
import { MedicineContext } from "../contexts/MedicineContext";

export default function MedicineItem({ med }) {
  const { addToBill } = useContext(MedicineContext);

  return (
    <tr className="border-b border-gray-800 hover:bg-gray-800 transition">
      <td className="p-4 font-semibold">{med.name}</td>
      <td className="p-4 text-gray-300">{med.desc}</td>
      <td className="p-4">₹{med.price}</td>
      <td className="p-4">
        <span className={med.quantity === 0 ? "text-red-500 font-bold" : "text-green-400 font-bold"}>
          {med.quantity === 0 ? "Out of stock" : `Qty: ${med.quantity}`}
        </span>
      </td>
      <td className="p-4 text-center">
        <button
          onClick={() => addToBill(med.id)}
          disabled={med.quantity === 0}
          className={`px-4 py-2 rounded-lg font-medium transition shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ${
            med.quantity === 0
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          Add to Bill
        </button>
      </td>
    </tr>
  );
}
