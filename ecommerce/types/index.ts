import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export type ImageType = {
  src: string | StaticImageData;
  width?: number;
  height?: number;
  alt?: string;
  size?: string;
};

export type ProductType = {
  image: ImageType;
  name?: string;
  price?: number;
  id: string;
};

// "SSR": Server-side rendering, "ISR": Incremental Static Regeneration, "SSG": Static-site generation
export type Methods = "SSR" | "ISR" | "SSG";

export type FetchOptionsType = {
  endpoint: RequestInfo | URL;
  fetchingMethod?: Methods;
};

export type RequestPropsType = {
  product?: ProductType;
  endpoint?: RequestInfo | URL;
  id?: string;
};

export type FunctionType = (id?: string) => void;

export type CartContextTypes = {
  cartCount: ProductType[];
  setCartCount: Dispatch<SetStateAction<ProductType[]>>;
};
