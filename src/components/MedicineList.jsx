import { useContext } from "react";
import { MedicineContext } from "../contexts/MedicineContext";
import MedicineItem from "./MedicineItem";

export default function MedicineList() {
  const { medicines } = useContext(MedicineContext);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        📋 Medicine Inventory
      </h2>

      {medicines.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No medicines added yet. Use the form above to add some.
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {medicines.map((med) => (
            <MedicineItem key={med.id} med={med} />
          ))}
        </div>
      )}
    </div>
  );
}
