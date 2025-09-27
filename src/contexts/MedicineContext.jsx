import { createContext, useState, useEffect } from "react";

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState(() => {
    const saved = localStorage.getItem("medicines");
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("medicines", JSON.stringify(medicines));
  }, [medicines]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, { ...medicine, id: Date.now() }]);
  };

  const addToBill = (id) => {
    setMedicines((prevMeds) =>
      prevMeds.map((med) =>
        med.id === id && med.quantity > 0
          ? { ...med, quantity: med.quantity - 1 }
          : med
      )
    );

    setCart((prevCart) => {
      const selected = medicines.find((m) => m.id === id);
      if (!selected) return prevCart;
      const exists = prevCart.find((item) => item.id === id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...selected, qty: 1 }];
      }
    });
  };

  const clearCart = () => setCart([]);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <MedicineContext.Provider
      value={{ medicines, addMedicine, addToBill, cart, totalAmount, clearCart }}
    >
      {children}
    </MedicineContext.Provider>
  );
};
