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
    <header className="bg-black shadow-md p-4 rounded-b-xl flex items-center justify-between mb-8">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">💊</span>
        <h1 className="text-3xl font-extrabold text-blue-950">MedStock</h1>
      </div>

      {/* Input Form and Cart */}
      <div className="flex items-center gap-3 flex-wrap justify-end">
        <input
          className="border rounded px-3 py-2 w-36 focus:ring-2 focus:ring-blue-400 text-sm"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border rounded px-3 py-2 w-44 focus:ring-2 focus:ring-blue-400 text-sm"
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />
        <input
          className="border rounded px-3 py-2 w-24 focus:ring-2 focus:ring-blue-400 text-sm"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="border rounded px-3 py-2 w-20 focus:ring-2 focus:ring-blue-400 text-sm"
          type="number"
          placeholder="Qty"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow text-sm font-semibold"
        >
          ➕ Add
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow flex items-center gap-2 text-sm font-semibold"
        >
          🛒 Cart
          <span className="bg-white text-blue-600 font-bold rounded-full px-2 py-0.5 ml-1">
            {cart.reduce((sum, item) => sum + item.qty, 0)}
          </span>
        </button>
      </div>
    </header>
  );
}
