// import React, { createContext, useState } from "react";

// // Create Context
// export const CartContext = createContext();

// // Provider Component
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]); // Cart state
//   const [WishListItems, setWishListItems] = useState([]); // wishlist state

//   // Add to Cart function
//   const addToCart = (product, quantity, weight) => {
//     setCartItems((prevCart) => {
//       const existingItem = prevCart.find(
//         (item) => item.id === product.id && item.weight === weight
//       );

//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id && item.weight === weight
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity, weight }];
//       }
//     });
//   };

//   // Remove from Cart function
//   const removeFromCart = (productId, weight) => {
//     setCartItems((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === productId && item.weight === weight
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   // Add to WishList Functions
//   const AddToWishList = (product) => {
//     const isProductInWishList = WishListItems.some(item => item?.id === product?.id);
//     if (!isProductInWishList) {
//       setWishListItems([...WishListItems, product]); 
//     }
//   };


//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         WishListItems,
//         addToCart,
//         removeFromCart,
//         AddToWishList,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };



import React, { createContext, useState } from "react";

// Create Context
export const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Cart state
  const [WishListItems, setWishListItems] = useState([]); // Wishlist state
  const [uid , setuid] = useState(null); // User Id


  // Add to wishlist  
  const AddToWishList = (product) => {
    setWishListItems((prevWishList) => {
      const isProductInWishList = prevWishList.some(item => item.id === product.id);
      return isProductInWishList ? prevWishList : [...prevWishList, product];
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        WishListItems,
        AddToWishList,
        uid,
        setuid, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
