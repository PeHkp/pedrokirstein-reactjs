import styled from "styled-components";
import { shade } from "polished";

import imageBackground from "../../assets/image/carbon.svg";

export const BoxBanner = styled.div`
  height: 300px;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: url(${imageBackground}) no-repeat -110px -110px;
  color: rgb(224, 223, 223);
  border: 2px solid #20e080;
  border-radius: 20px;
  @media (max-width: 720px) {
    margin-top: 20px;
  }

  h2 {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 2px;
  }

  p {
    margin-top: 5px;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 2px;
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
