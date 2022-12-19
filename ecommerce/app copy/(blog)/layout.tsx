import { ReactNode } from "react";

type PropsTypes = { children: ReactNode };

const Layout = ({ children }: PropsTypes) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
