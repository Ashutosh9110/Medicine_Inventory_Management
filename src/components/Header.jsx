import { useState, useContext } from "react";
import { MedicineContext } from "../contexts/MedicineContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { addMedicine, cart } = useContext(MedicineContext);
  const [form, setForm] = useState({ name: "", desc: "", price: "", quantity: "" });
  const navigate = useNavigate();

  const handleAdd = () => {
    if (form.name && form.price && form.quantity) {
      addMedicine({
        name: form.name,
        desc: form.desc,
        price: parseFloat(form.price),
        quantity: parseInt(form.quantity, 10),
      });
      setForm({ name: "", desc: "", price: "", quantity: "" });
    }
  };

  return (
    <header className="bg-white shadow-md p-6 rounded-b-xl">
      {/* entered Logo */}
      <div className="flex justify-center mb-6">
        <h1 className="text-4xl font-extrabold text-blue-600 flex items-center gap-2">
          💊 MedStock
        </h1>
      </div>

      {/* ✅ Centered Input Form */}
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto">
        <input
          className="border rounded px-3 py-2 w-40 focus:ring-2 focus:ring-blue-400"
          placeholder="Medicine Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border rounded px-3 py-2 w-48 focus:ring-2 focus:ring-blue-400"
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />
        <input
          className="border rounded px-3 py-2 w-28 focus:ring-2 focus:ring-blue-400"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="border rounded px-3 py-2 w-28 focus:ring-2 focus:ring-blue-400"
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />

        <button
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow"
        >
          ➕ Add Medicine
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow flex items-center gap-2"
        >
          🛒 Cart{" "}
          <span className="bg-white text-blue-600 font-bold rounded-full px-2 py-0.5">
            {cart.length}
          </span>
        </button>
      </div>
    </header>
  );
}
