import styled from "styled-components";

import imageBackground from "../../assets/image/carbon.svg";

export const BoxBanner = styled.div`
  height: 150px;
  flex: 1;
  padding: 10px;
  @media (max-width: 720px) {
    margin-top: 20px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: url(${imageBackground}) no-repeat -110px -150px;
  color: rgb(224, 223, 223);
  border: 2px solid #20e080;
  border-radius: 20px;

  h2 {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 2px;
  }

  p {
    margin-top: 5px;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 1.5px;
    @media (max-width: 720px) {
      text-align: center;
    }
  }

  
`;
