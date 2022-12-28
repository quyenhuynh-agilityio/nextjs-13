"use client";

import React from "react";

export const CartContext = React.createContext<
  [number, React.Dispatch<React.SetStateAction<null | number>>] | undefined
>(undefined);
