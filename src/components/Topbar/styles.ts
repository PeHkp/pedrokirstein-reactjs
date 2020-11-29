import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 890px) {
    display: none;
  }

  @media (max-width: 890px) {
    .sz-navbar-items {
      width: 300px;
    }
  }
  @media (max-width: 720px) {
    .sz-navbar-left .sz-navbar-hamburger{
    left: 20px
  }
  }
`;
