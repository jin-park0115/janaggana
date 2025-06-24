import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Badge } from "../components/Badge";
import { Button } from "../components/ui/Button";
import { RiPencilFill } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { RiRepeat2Line } from "react-icons/ri";

import styled from "styled-components";

export function HomePage() {
  return (
    <Container>
      <Banner />
      <Badge />
      <Button icon={<RiPencilFill />} bgColor="#007bff" href="/quiz">
        문제풀기
      </Button>
      <Button icon={<BiFoodMenu />} bgColor="#28a745" href="/learning">
        학습하기
      </Button>
      <Button icon={<RiRepeat2Line />} bgColor="#ffc107">
        복습하기
      </Button>
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
