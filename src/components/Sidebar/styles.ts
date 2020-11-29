import styled from "styled-components";
import { shade } from "polished";

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 890px) {
    display:none;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  h2 {
    color: rgb(224, 223, 223);
    margin: 10px 0;
    font-size: 22px;
    font-weight: 600;
  }

  p {
    color: rgb(224, 223, 223);
  }

  .button {
    margin: 10px 0;
    color: rgb(224, 223, 223);
    background-color: transparent;
    border: 1px solid rgb(224, 223, 223);
    border-radius: 20px;
    text-align: center;
    width: 150px;
    height: 30px;
    padding: 5px 30px;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
      background: rgb(224, 223, 223);
      color: #141b23;
      border: 1px solid #141b23;
    }
  }

  div {
    margin: 40px 0 0 0;
    width: 180px;

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      padding: 0 30px;
      color: rgb(224, 223, 223);

      & + a {
        margin: 15px 0;
      }

      transition: transform 0.2s;

      &:hover {
        transform: translateX(10px);
        color: ${shade(0.2, "rgb(224, 223, 223)")};

        svg {
          color: ${shade(0.2, "#20e080")};
        }
      }
    }

    p {
      width: 50%;
    }

    svg {
      color: #20e080;
    }
  }
`;
