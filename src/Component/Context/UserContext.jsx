import React, { createContext, useState } from "react";

// Create Context
export const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Cart state

  // Add to Cart function
  const addToCart = (product, quantity, weight) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.weight === weight
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.weight === weight
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity, weight }];
      }
    });
  };

  // Remove from Cart function
  const removeFromCart = (productId, weight) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.weight === weight
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
