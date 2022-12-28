import { CartContext } from "contexts/CartContext";
import { useContext } from "react";

export const useCartCount = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartCount must be used within a CartCountProvider");
  }
  return context;
};
