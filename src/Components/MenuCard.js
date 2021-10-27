import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function MenuCard() {
  return (
    <CardContainer variants={downVariants} initial="hidden" animate="visible">
      <Text>Home</Text>
      <Text>About</Text>
      <Text>Contact</Text>
      <Text>Blog</Text>
      <Text>Careers</Text>
    </CardContainer>
  );
}

const CardContainer = styled(motion.div)`
  margin: 1.7rem;
  padding: 1.7rem;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const Text = styled.h1`
  font-size: 1.3rem;
  margin-bottom: 1.7rem;
  font-weight: var(--thin);
  color: var(--DarkBlue);
  cursor: pointer;
`;

const downVariants = {
  hidden: {
    opacity: 0,
    y: "-500px",
  },
  visible: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
    
  },
};
