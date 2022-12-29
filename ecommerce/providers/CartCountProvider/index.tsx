"use client";

// Libraries
import React from "react";
import { useState } from "react";

// Types
import { ProductType } from "@/types/index";

// Contexts
import { CartContext } from "contexts/CartContext";

// utils
import { getItem } from "@/utils/localStorage";

type PropsType = {
  children?: React.ReactNode;
};

export function CartCountProvider({ children }: PropsType) {
  const initialCartCount = getItem("cart_count") || [];
  const [cartCount, setCartCount] = useState<ProductType[]>(initialCartCount);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
}
