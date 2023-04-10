
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription]= useState('')
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

 
  const handlePriceChange = (event) => {
    setPrice(parseFloat(event.target.value));
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };


  const handleAddItem = () => {
    const newItem = { name,description, price, quantity};
    setItems([...items, newItem]);
    setName('');
    setDescription('')
    setPrice('');
    setQuantity('');
  
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (<div><h1 className='navbar'>Admin Panel for Medicine Shop Sellers</h1>
    <div className="app-container">
      <div className="form-container">
        <div>
          <label>Medicine Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" step="0.01" value={price} onChange={handlePriceChange} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" step="0.01" value={quantity} onChange={handleQuantityChange} />
        </div>
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul className="items-list">
        {items.map((item, index) => (
          <li key={index}>
            {item.name} {item.description}  ₹{item.price} {item.quantity} 
            <button onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-container">
        <button onClick={handleCartClick}> Cart ({cartItems.length})</button>
        {showCart && <Cart items={cartItems} onClose={handleCloseCart} />}
      </div>
    </div>
    </div>
  );
}

function Cart({ items, onClose }) {
  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h2>Cart</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <ul className="cart-items-list">
        {items.map((item, index) => (
          <li key={index}>
            {item.name} {item.description}  ₹{item.price}   {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

