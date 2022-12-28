// Libraries
import { ReactNode } from "react";
import { cookies } from "next/headers";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChakraProvider } from "providers/ChakraProvider";
import CartProvider from "providers/CartProvoder";

type PropsTypes = { children: ReactNode };

const RootLayout = ({ children }: PropsTypes) => {
  const nextCookies = cookies();
  // Get the cart count from the users cookies and pass it to the client
  // AddToCart component
  const cartCount = nextCookies.get("cart_count")?.value || "0";

  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <CartProvider initialCartCount={Number(cartCount)}>
            <Header cartCount={Number(cartCount)} />
            {children}
            <Footer />
          </CartProvider>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
