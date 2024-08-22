import React, { useState } from 'react';
import './App.css';
import InventoryForm from './components/InventoryForm';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart';

function App() {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addToCart = (medicine) => {
    const existingItem = cart.find((item) => item.name === medicine.name);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === medicine.name
            ? { ...item, qty: item.qty + medicine.qty }
            : item
        )
      );
    } else {
      setCart([...cart, medicine]);
    }
  };

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="App">
      <header>
        <h1>Medicine Shop Inventory</h1>
        <Cart cart={cart} totalQty={totalQty} />
      </header>
      <div className="main-content">
        <div className="form-section">
          <InventoryForm addMedicine={addMedicine} />
          <MedicineList medicines={medicines} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
