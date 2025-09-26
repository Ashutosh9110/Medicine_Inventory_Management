import { useContext } from "react";
import { MedicineContext } from "../contexts/MedicineContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, totalAmount } = useContext(MedicineContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700 flex items-center justify-center gap-3">
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">
          Your cart is empty. Add some medicines to continue.
        </p>
      ) : (
        <>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full border-collapse bg-white text-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-center">Price</th>
                  <th className="p-4 text-center">Qty</th>
                  <th className="p-4 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-blue-50 transition"
                  >
                    <td className="p-4 font-semibold">{item.name}</td>
                    <td className="p-4 text-center">₹{item.price}</td>
                    <td className="p-4 text-center">{item.qty}</td>
                    <td className="p-4 text-right font-bold">
                      ₹{item.price * item.qty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-6">
            <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg text-xl font-bold shadow">
              Grand Total: ₹{totalAmount}
            </div>
          </div>
        </>
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
