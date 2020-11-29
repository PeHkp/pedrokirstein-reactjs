import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  main {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: center;

    @media (max-width: 720px) {
      padding: 0;
  }
  }
  @media (max-width: 890px) {
    max-width: 890px
  }
`;
