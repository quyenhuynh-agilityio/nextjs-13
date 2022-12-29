// Libraries
import { ReactNode } from "react";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@/providers/ChakraProvider";

type PropsTypes = { children: ReactNode };

const RootLayout = ({ children }: PropsTypes) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Header />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
