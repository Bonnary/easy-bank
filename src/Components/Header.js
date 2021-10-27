import styled from "styled-components";
import MenuIcon from "./MenuIcon";
import logo from "../images/logo.svg";
// import costom from "../images/favicon-32x32.png";
export default function Header({ Click, setClick }) {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} alt="" />
        <TextContainer>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Contact</Text>
          <Text>Blog</Text>
          <Text>Careers</Text>
        </TextContainer>
        <Button>Request Invite</Button>
        <MenuIcon Click={Click} setClick={setClick} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.nav`
  height: 5rem;
  z-index: 2;
  width: 100%;
  position: fixed;
  background-color: white;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Logo = styled.img`
  margin-top: 1.7rem;
  justify-content: center;
  margin-left: 3rem;

  @media (max-width: 1025px) {
    margin-left: 1.5rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.7rem;

  @media (max-width: 770px) {
    display: none;
  }
`;

const Text = styled.h1`
  font-size: 1.3rem;
  font-weight: var(--thin);
  color: var(--GrayishBlue);
  cursor: pointer;
  // This is for custom cursor (Image have to be 32 x 32 px)
  //cursor: url(), auto;

  &::after {
    content: "";
    height: 5px;
    width: 0;
    display: block;
    border-radius: 1.5rem;
    margin-top: 1.5rem;
    background: linear-gradient(to right, var(--LimeGreen), var(--BrightCyan));
    transition: 0.3s;
  }

  &:hover {
    color: var(--DarkBlue);
    &:after {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  margin-left: 100px;
  margin-top: 1rem;
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

  @media (max-width: 770px) {
    display: none;
  } ;
`;
