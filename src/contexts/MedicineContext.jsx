import { createContext, useState, useEffect } from "react";

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState(() => {
    const saved = localStorage.getItem("medicines");
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("medicines", JSON.stringify(medicines));
  }, [medicines]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, { ...medicine, id: Date.now() }]);
  };

  const addToBill = (id) => {
    setMedicines((prev) =>
      prev.map((med) =>
        med.id === id && med.quantity > 0
          ? { ...med, quantity: med.quantity - 1 }
          : med
      )
    );

    const selected = medicines.find((m) => m.id === id);
    if (selected) {
      const exists = cart.find((item) => item.id === id);
      if (exists) {
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        );
      } else {
        setCart([...cart, { ...selected, qty: 1 }]);
      }
    }
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <MedicineContext.Provider
      value={{ medicines, addMedicine, addToBill, cart, totalAmount }}
    >
      {children}
    </MedicineContext.Provider>
  );
};
