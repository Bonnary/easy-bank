import React from "react";
import styled from "styled-components";
import logo from "../images/LogoWhite.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import youtube from "../images/icon-youtube.svg";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src={logo} />
          <IconWrapper>
            <Icon src={facebook} />
            <Icon src={instagram} />
            <Icon src={pinterest} />
            <Icon src={twitter} />
            <Icon src={youtube} />
          </IconWrapper>
        </LogoWrapper>
        <TextWrapper>
          <TextContainer>
            <Text>About Us</Text>
            <Text>Contact</Text>
            <Text>Blog</Text>
          </TextContainer>
          <TextContainer>
            <Text>Careers</Text>
            <Text>Suport</Text>
            <Text>Privacy Policy</Text>
          </TextContainer>
        </TextWrapper>
        <ButtonWrapper>
          <Button whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            Request Invite
          </Button>
          <WebsiteRights>
            EasyBank © {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--DarkBlue);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //max-height: 190px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

const LogoWrapper = styled.div`
  margin-top: 2rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img``;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
const Icon = styled.img`
  width: 1rem;
  cursor: pointer;
  &:hover {
    background-color: var(--LimeGreen);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5rem;
  gap: 5rem;
  @media (max-width: 770px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

const Text = styled.h1`
  font-size: 1rem;
  font-weight: var(--thin);
  color: var(--GrayishBlue);
  cursor: pointer;

  &:hover {
    color: var(--LimeGreen);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled(motion.button)`
  margin-top: 1rem;
  width: 10rem;
  height: 3rem;
  border-radius: 25px;
  border: none;
  color: white;
  font-size: 1rem;
  background: linear-gradient(to right, var(--LimeGreen), var(--BrightCyan));
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-top: 1rem;
`;
