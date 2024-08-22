import React, { useState } from 'react';
import './MedicineList.css';

function MedicineList({ medicines, addToCart }) {
  const [qty, setQty] = useState({});

  const handleAddToCart = (medicine) => {
    if (qty[medicine.name] && qty[medicine.name] > 0) {
      addToCart({ ...medicine, qty: parseInt(qty[medicine.name]) });
      setQty({ ...qty, [medicine.name]: 0 });
    }
  };

  return (
    <div className="medicine-list">
      {medicines.map((medicine) => (
        <div key={medicine.name} className="medicine-item">
          <div className="medicine-info">
            <span className="medicine-name">{medicine.name}</span>
            <span className="medicine-description">{medicine.description}</span>
            <span className="medicine-price">Rs:{medicine.price.toFixed(2)}</span>
          </div>
          <div className="medicine-actions">
            <input
              type="number"
              placeholder="Qty"
              value={qty[medicine.name] || 0}
              onChange={(e) =>
                setQty({ ...qty, [medicine.name]: e.target.value })
              }
            />
            <button onClick={() => handleAddToCart(medicine)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MedicineList;
