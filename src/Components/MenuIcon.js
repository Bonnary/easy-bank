import styled from "styled-components";

export default function MenuIcon({ Click, setClick }) {
  return (
    <Container>
      <Hamburger onClick={() => setClick(!Click)}>
        <Line className={Click && "touch"} />
        <Line className={Click && "touch"} />
        <Line className={Click && "touch"} />
      </Hamburger>
    </Container>
  );
}

 const Container = styled.div`
   margin-top: 1.5rem;
   margin-right: 2rem;
   display: flex;
   justify-content: flex-end;
   background-color: transparent;

   @media (min-width: 770px) {
     display: none;
   }
 `;

 const Hamburger = styled.div`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 2;
`;

 const Line = styled.span`
  width: 100%;
  height: 3px;
  background-color: #15023a;
  transform-origin: left;
  transition: all 0.5s ease;
  z-index: 6;

  &.touch {
    &:first-child {
      background-color: #15023a;
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:last-child {
      background-color: #15023a;
      transform: rotate(-45deg);
    }
  }
`;
