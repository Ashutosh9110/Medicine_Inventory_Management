import { useContext } from "react";
import { MedicineContext } from "../contexts/MedicineContext";
import MedicineItem from "./MedicineItem";

export default function MedicineList() {
  const { medicines } = useContext(MedicineContext);

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        📋 Medicine Inventory
      </h2>

      {medicines.length === 0 ? (
        <p className="text-center text-gray-400 mt-10 text-lg">
          No medicines added yet. Use the form above to add some.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg bg-gray-900">
          <table className="w-full text-left text-white">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-4">Medicine Name</th>
                <th className="p-4">Description</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((med) => (
                <MedicineItem key={med.id} med={med} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
