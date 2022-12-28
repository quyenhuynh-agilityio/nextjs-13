"use client";

import { CartContext } from "contexts/CartContext";
import { useState } from "react";

type PropsType = {
  children: React.ReactNode;
  initialCartCount: number;
};

const CartProvider = ({ children, initialCartCount }: PropsType) => {
  const [optimisticCartCount, setOptimisticCartCount] = useState<null | number>(
    null,
  );

  const count =
    optimisticCartCount !== null ? optimisticCartCount : initialCartCount;

  return (
    <CartContext.Provider value={[count, setOptimisticCartCount]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
