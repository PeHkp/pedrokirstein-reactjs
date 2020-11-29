import styled from "styled-components";

export const Listagem = styled.div`
  height: 250px;
  background: transparent;
  border-top: 2px solid #20e080;
  border-bottom: 2px solid #20e080;
  color: rgb(224, 223, 223);
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 720px) {
    height: 350px;
  }

  & + & {
    margin: 20px 0;
    border-top: none;
  }

  h3 {
    color: rgb(224, 223, 223);
    margin: 0 0 10px 0;
    font-size: 28px;
    font-weight: 500;
  }
`;

export const Techs = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }

  a {
    color: rgb(224, 223, 223);
    background: transparent;

    @media (max-width: 720px) {
     & + a {
       margin-top: 10px
     }
  }

    width: 190px;
    height: 60px;

    text-align: center;

    padding: 20px 20px;
    border-radius: 10px;
    border: 2px solid rgb(224, 223, 223);

    transition: transform 0.2s;
    &:hover {
      transform: translateY(-5px);
      color: #141b23;
      background: rgb(224, 223, 223);
      border: 2px solid #141b23;
    }
  }
`;
export const IconsElement = styled.div`
margin-top: 10px;
  svg {
    margin: 0 10px;
  }
`;