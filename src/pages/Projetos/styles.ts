import styled from "styled-components";

export const Container = styled.div`
  display: flex;

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

export const ListItem = styled.div`
  margin-top: 100px;
  max-height: 50vh;
  overflow: scroll;
  @media (max-width: 890px) {
    margin-top: 50px;
  }
`;
