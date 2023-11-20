"use client";

import Header from "@/components/header/header";
import React from "react";

import Confetti from "react-confetti";
import { ContainerConfetti, StyledParagraph } from "./styles";

const Fizalize = () => {
  return (
    <>
      <Header />
      <ContainerConfetti>
        <Confetti
          style={{
            /* Estilos para centralizar */
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </ContainerConfetti>
      <StyledParagraph>Parabéns Compra Finalizada</StyledParagraph>
    </>
  );
};

export default Fizalize;
