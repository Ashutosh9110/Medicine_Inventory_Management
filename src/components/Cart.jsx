import { useContext } from "react";
import { MedicineContext } from "../contexts/MedicineContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, totalAmount } = useContext(MedicineContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-white flex items-center justify-center gap-3">
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-lg text-center">
          Your cart is empty. Add some medicines to continue.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg bg-gray-900">
          <table className="w-full text-left text-white">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-4">Medicine Name</th>
                <th className="p-4 text-center">Price</th>
                <th className="p-4 text-center">Qty</th>
                <th className="p-4 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-800 hover:bg-gray-800 transition"
                >
                  <td className="p-4 font-semibold">{item.name}</td>
                  <td className="p-4 text-center">₹{item.price}</td>
                  <td className="p-4 text-center">{item.qty}</td>
                  <td className="p-4 text-right font-bold">₹{item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {cart.length > 0 && (
        <div className="flex justify-end mt-6">
          <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg text-xl font-bold shadow">
            Grand Total: ₹{totalAmount}
          </div>
        </div>
      )}

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          ← Back to Inventory
        </button>
      </div>
    </div>
  );
}
