import styled from "styled-components";

export const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #ffffff;
`;

export const ButtonContainer = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${({ children }) => {
    if (children === "Checar") return "yellow";
    if (children === "Resolver") return "tomato";
    if (children === "Reiniciar") return "greenyellow";
  }};
  font-weight: bold;
  font-size: 17px;
  color: #000000;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.15);
  }
`;
