import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Badge } from "../components/Badge";

import styled from "styled-components";

export function HomePage() {
  return (
    <Container>
      <Banner />
      <Badge />
      <NavBar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  gap: 10px;
`;
