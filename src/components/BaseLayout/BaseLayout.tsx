import React, { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import { type } from "os";

type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      {children}
    </>
  );
};

export default BaseLayout;
