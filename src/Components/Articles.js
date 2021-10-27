import React from "react";
import styled from "styled-components";
import currency from "../images/image-currency.jpg";

import { motion } from "framer-motion";

export default function Articles() {
  return (
    <Container>
      <Wrapper>
        <Text>Latest Articles</Text>
        <ArticleWrapper>
          <ArticleContainer
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <ArticleImage src={currency} />
            <CardContainer>
              <CardWrapper>
                <Author>By Claire Robinson</Author>
                <Title>Receive money in any current with no fees</Title>
                <Decription>
                  The world is gettin smaller and we're becoming more mobile. So
                  why should you be forced to only receive money in a single...
                </Decription>
              </CardWrapper>
            </CardContainer>
          </ArticleContainer>
          <ArticleContainer
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <ArticleImage src={currency} />
            <CardContainer>
              <CardWrapper>
                <Author>By Claire Robinson</Author>
                <Title>Receive money in any current with no fees</Title>
                <Decription>
                  The world is gettin smaller and we're becoming more mobile. So
                  why should you be forced to only receive money in a single...
                </Decription>
              </CardWrapper>
            </CardContainer>
          </ArticleContainer>
          <ArticleContainer
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <ArticleImage src={currency} />
            <CardContainer>
              <CardWrapper>
                <Author>By Claire Robinson</Author>
                <Title>Receive money in any current with no fees</Title>
                <Decription>
                  The world is gettin smaller and we're becoming more mobile. So
                  why should you be forced to only receive money in a single...
                </Decription>
              </CardWrapper>
            </CardContainer>
          </ArticleContainer>
          <ArticleContainer
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <ArticleImage src={currency} />
            <CardContainer>
              <CardWrapper>
                <Author>By Claire Robinson</Author>
                <Title>Receive money in any current with no fees</Title>
                <Decription>
                  The world is gettin smaller and we're becoming more mobile. So
                  why should you be forced to only receive money in a single...
                </Decription>
              </CardWrapper>
            </CardContainer>
          </ArticleContainer>
        </ArticleWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  background-color: var(--VeryLightGray);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
  flex-direction: column;
`;

const Text = styled.h1`
  font-size: 1.7rem;
  font-weight: var(--thin);
  color: var(--DarkBlue);
  margin-bottom: 1rem;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 770px){
    flex-direction: column;
  }
`;

const ArticleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  margin: 1rem;
`;

const ArticleImage = styled.img`
  border-radius: 10px 10px 0 0;
  max-width: 20rem;
`;

const CardContainer = styled.div`
  max-width: 20rem;
`;

const CardWrapper = styled.div`
  margin: 2rem;
`;

const Author = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: var(--thin);
  color: var(--GrayishBlue);
`;

const Title = styled.h1`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: var(--thin);
  color: var(--DarkBlue);
  cursor: pointer;

  &:hover {
    color: var(--LimeGreen);
  }
`;

const Decription = styled.p`
  font-size: 0.9rem;
  font-weight: var(--thin);
  color: var(--GrayishBlue);
`;
