import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MedicineProvider } from "./contexts/MedicineContext";
import Header from "./components/Header";
import MedicineList from "./components/MedicineList";
import Cart from "./components/Cart";
import "./App.css"

export default function App() {
  return (
    <MedicineProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MedicineList />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </MedicineProvider>
  );
}
