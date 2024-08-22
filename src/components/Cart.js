import React, { useState } from 'react';
import Modal from './Modal';
import './Cart.css';

function Cart({ cart, totalQty }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="cart">
      <button onClick={() => setIsModalOpen(true)}>
        Cart ({totalQty})
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Cart Items</h2>
        {cart.map((item) => (
          <div key={item.name} className="cart-item">
            <p>
              {item.name} - {item.qty} x Rs:{item.price.toFixed(2)}
            </p>
          </div>
        ))}
        <p>Total Price: Rs:{totalPrice.toFixed(2)}</p>
      </Modal>
    </div>
  );
}

export default Cart;