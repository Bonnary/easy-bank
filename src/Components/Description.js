import React from "react";
import styled from "styled-components";
import online from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";
export default function Description() {
  return (
    <Container>
      <TextWrapper>
        <TextTitle>Why chooes Easybank?</TextTitle>
        <TextDecription>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never befor.
        </TextDecription>
        <DetailContainer>
          <DetailWrapper>
            <Icon src={online} />
            <DetailTitle>Online Banking</DetailTitle>
            <DetailDecription>
              Our modern web and mobile applications allow you to keep track of
              our finances whenever you are in the world.
            </DetailDecription>
          </DetailWrapper>
          <DetailWrapper>
            <Icon src={budgeting} />
            <DetailTitle>Simple Budgeting</DetailTitle>
            <DetailDecription>
              See exactly where your money goes each month. Receive
              notifications when you're close to your hitting limits.
            </DetailDecription>
          </DetailWrapper>
          <DetailWrapper>
            <Icon src={onboarding} />
            <DetailTitle>Fast Onboarding</DetailTitle>
            <DetailDecription>
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </DetailDecription>
          </DetailWrapper>
          <DetailWrapper>
            <Icon src={api} />
            <DetailTitle>Open API</DetailTitle>
            <DetailDecription>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </DetailDecription>
          </DetailWrapper>
        </DetailContainer>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  background-color: var(--LightGrayishBlue);
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
  flex-direction: column;
  
`;

const TextTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: var(--thin);
  color: var(--DarkBlue);
  margin-bottom: 1rem;
`;

const TextDecription = styled.p`
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: var(--thin);
  color: var(--GrayishBlue);
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8rem;
  @media (max-width: 770px) {
    flex-direction: column;
    margin: 1rem;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 770px) {
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;

const Icon = styled.img`
  width: 4.5rem;
`;

const DetailTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: var(--thin);
  color: var(--DarkBlue);
`;

const DetailDecription = styled.p`
  font-size: 1rem;
  font-weight: var(--thin);
  color: var(--GrayishBlue);
  width: 80%;

  @media (max-width: 770px) {
    text-align: center;
  }
`;
