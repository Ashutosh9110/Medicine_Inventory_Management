import { useContext } from "react";
import { MedicineContext } from "../contexts/MedicineContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, totalAmount } = useContext(MedicineContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full text-left border-collapse bg-white rounded shadow">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Description</th>
                <th className="p-3">Price</th>
                <th className="p-3">Qty</th>
                <th className="p-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-t hover:bg-blue-50">
                  <td className="p-3 font-medium">{item.name}</td>
                  <td className="p-3">{item.desc}</td>
                  <td className="p-3">₹{item.price}</td>
                  <td className="p-3">{item.qty}</td>
                  <td className="p-3 font-semibold">₹{item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right mt-6 text-2xl font-bold text-green-700">
            Grand Total: ₹{totalAmount}
          </div>
        </>
      )}

      <button
        onClick={() => navigate("/")}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        ← Back to Inventory
      </button>
    </div>
  );
}
