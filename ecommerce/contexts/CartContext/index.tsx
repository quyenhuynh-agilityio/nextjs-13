"use client";

// Libraries
import { createContext } from "react";

// Types
import { CartContextTypes } from "@/types/index";
const initialState = {
  cartCount: [],
  setCartCount: () => {},
};

export const CartContext = createContext<CartContextTypes>(initialState);
