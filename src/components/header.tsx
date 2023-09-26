//for components
import React from "react";
import Container from "./ui/container";
import Navbar from "./ui/navbar";
import { Separator } from "./ui/separator";
const Header: React.FC = (): React.ReactNode => {
  return (
    <div className="bg-background mb-8">
      <Container>
        <Navbar></Navbar>
      </Container>

      <Separator className="mb-4"></Separator>
      <Container>
        <h1 className="text-center text-2xl md:text-3xl mt-7 font-bold text-primary">
          BRL EXCHANGE RATE
        </h1>
      </Container>
    </div>
  );
};

export default Header;
