import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  margin-bottom: 100px;

  main {
    flex: 1;
    padding: 0 20px;
    justify-content: center;

    @media (max-width: 720px) {
      padding: 0;
    }
  }
  @media (max-width: 890px) {
    max-width: 890px;
  }
`;

export const ListItem = styled.div`
  margin-top: 50px;
  max-height: 50vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: transparent;
  border-top: 2px solid #20e080;
  color: rgb(224, 223, 223);
  padding: 30px 20px 0;

  & + & {
    border-top: none;
    border-bottom: 2px solid #20e080;
    padding: 0 20px 30px;
  }

  @media (max-width: 890px) {
    margin-top: 50px;
  }

  div {
    margin-top: 20px;
    a {
      margin: 0 10px;

      svg {
        transition: transform 0.2s;
        color: rgb(224, 223, 223);

        &:hover {
          transform: translateY(-5px);
          color: ${shade(0.2, "rgb(224, 223, 223)")};
        }
      }
    }
  }
`;
