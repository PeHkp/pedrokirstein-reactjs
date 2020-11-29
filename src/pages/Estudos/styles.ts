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
    max-width: 890px
  }
`;

export const Xa = styled.div`

  text-align: justify;
  color: rgb(224, 223, 223);
  padding: 40px 20px;
  border-top: 2px solid #20e080;
  border-bottom: 2px solid #20e080;

  & + & {
    margin-top: 0px;
    border-top: none;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }
  label {
    font-size: 14px;
    color: #D3D3D3;
  }
  p {
    font-size: 14px;
    a{
      color: #20e080
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