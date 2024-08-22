import React, { useState } from 'react';
import './InventoryForm.css';

function InventoryForm({ addMedicine }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      addMedicine({ name, description, price: parseFloat(price), qty: 0 });
      setName('');
      setDescription('');
      setPrice('');
    }
  };

  return (
    <form className="inventory-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default InventoryForm;