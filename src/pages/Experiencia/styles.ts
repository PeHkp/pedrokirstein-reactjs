import styled from "styled-components";

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

export const Xp = styled.div`
  @media (max-width: 500px) {
    text-align: center;
  }
  text-align: justify;
  color: rgb(224, 223, 223);
  border-top: 2px solid #20e080;
  border-bottom: 2px solid #20e080;
  padding: 40px 20px;

  & + & {
    margin-top: 0;
    border-top: none;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }
  label {
    font-size: 14px;
    color: #d3d3d3;
  }
  p {
    margin-top: 20px;
    font-size: 16px;
    a {
      color: #20e080;
    }
  }
`;

export const ListItem = styled.div`
  margin-top: 100px;
  max-height: 50vh;
  overflow: scroll;

  @media (max-width: 890px) {
    margin-top: 50px;
  }
`;
