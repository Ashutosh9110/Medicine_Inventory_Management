import { useContext } from "react";
import { MedicineContext } from "../contexts/MedicineContext";




export default function MedicineItem({ med }) {
  const { addToBill } = useContext(MedicineContext);

  return (
    <div className="border rounded-xl shadow-md p-4 w-60 bg-white flex flex-col items-center">
      <h3 className="text-lg font-bold mb-2">{med.name}</h3>
      <p className="text-gray-500 text-sm mb-2">{med.desc}</p>
      <p className="font-semibold">💰 ₹{med.price}</p>
      <p className={`mt-2 ${med.quantity === 0 ? "text-red-500" : "text-green-600"}`}>
        {med.quantity === 0 ? "Out of stock" : `Qty: ${med.quantity}`}
      </p>

      <button
        onClick={() => addToBill(med.id)}
        disabled={med.quantity === 0}
        className={`mt-4 px-4 py-2 rounded ${
          med.quantity === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        Add to Bill
      </button>
    </div>
  );
}

