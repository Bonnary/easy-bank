import React from "react";
import styled from "styled-components";
import bg from "../images/bg-intro-desktop.svg";
import Sbg from "../images/bg-intro-mobile.svg";
import phone from "../images/image-mockups.png";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <Container layout>
      <Wrapper>
        <TextWrapper>
          <Title>Next generation</Title>
          <Title buttom>digital banking</Title>
          <Description>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investion, and much
            more
          </Description>
          <Button>Request Invite</Button>
        </TextWrapper>
        <ImageWrapper>
          <BgImg src={bg} />
          <Smallbg src={Sbg} />
          <Phone src={phone} />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled(motion.div)`
  min-height: 700px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1025px) {
    flex-direction: column-reverse;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 3rem;
  margin-left: 8rem;
  @media (max-width: 1025px) {
    margin-top: 0;
    margin-left: 0;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 3.7rem;
  font-weight: var(--normal);
  color: var(--DarkBlue);
  margin-bottom: ${(props) => (props.buttom ? "2rem" : "0")};

  @media (max-width: 1025px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  width: 45%;
  font-size: 1.5rem;
  font-weight: var(--thin);
  color: var(--GrayishBlue);
  margin-bottom: 2rem;
  @media (max-width: 1025px) {
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 10rem;
  height: 3rem;
  border-radius: 25px;
  border: none;
  color: white;
  font-size: 1rem;
  background: linear-gradient(to right, var(--LimeGreen), var(--BrightCyan));

  &:hover {
    opacity: 0.7;
  }
`;

const ImageWrapper = styled.div``;

const BgImg = styled.img`
  position: absolute;
  top: -25%;
  right: -25%;

  @media (max-width: 1025px) {
    display: none;
  }
`;

const Smallbg = styled.img`
  position: absolute;
  @media (min-width: 1025px) {
    display: none;
  }
`;
const Phone = styled.img`
  position: absolute;
  top: -5%;
  right: -5%;
  @media (max-width: 1025px) {
    position: relative;
    width: 85%;
    right: -8%;
  }
`;
