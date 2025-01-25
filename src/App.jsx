import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== productId)
    );
  };

  const increaseQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="store-name">
            <h1>My Product Store</h1>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<ProductList products={products} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />} />
        </Routes>
      </div>
    </Router>
  );
}

function ProductList({ products, cart, addToCart, removeFromCart }) {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    navigate('/cart');
  };

  return (
    <div className="products-grid">
      {products.map(product => {
        const inCart = cart.find(item => item.id === product.id);
        return (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title" title={product.title}>
              {product.title.length > 10 ? `${product.title.substring(0, 10)}...` : product.title}
            </h2>
            <p className="product-price">${product.price}</p>
            <p className="product-description" title={product.description}>
              {product.description.length > 30 ? `${product.description.substring(0, 30)}...` : product.description}
            </p>
            {inCart ? (
              <button className="cart-button" onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
            ) : (
              <button className="cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Cart({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = totalPrice * 0.10;
  const finalPrice = totalPrice - discount;

  return (
    <div className="cart-page">
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h2 className="cart-title">{item.title}</h2>
          <p className="cart-price">Price: ${item.price}</p>
          <p className="cart-quantity">Quantity: {item.quantity}</p>
          <p className="cart-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
        </div>
      ))}
      <div className="cart-summary">
        <p className="subtotal">Subtotal: ${totalPrice.toFixed(2)}</p>
        <p className="discount">Discount (10%): -${discount.toFixed(2)}</p>
        <h2 className="final-price">Final Price: ${finalPrice.toFixed(2)}</h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}


export default App;
