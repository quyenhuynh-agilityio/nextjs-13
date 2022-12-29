// Libraries
import { ReactNode } from "react";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Providers
import { ChakraProvider } from "@/providers/ChakraProvider";
import { CartCountProvider } from "@/providers/CartCountProvider";

type PropsTypes = { children: ReactNode };

const RootLayout = ({ children }: PropsTypes) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <CartCountProvider>
            <Header />
            {children}
            <Footer />
          </CartCountProvider>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
