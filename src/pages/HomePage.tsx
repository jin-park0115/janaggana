import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Badge } from "../components/Badge";
import { HomeButton } from "../components/ui/ui_button/HomeButton";
import { RiPencilFill } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { RiRepeat2Line } from "react-icons/ri";

import styled from "styled-components";

export function HomePage() {
  return (
    <Container>
      <Banner />
      <Badge />
      <HomeButton icon={<RiPencilFill />} bgColor="#007bff" href="/404">
        문제풀기
      </HomeButton>
      <HomeButton icon={<BiFoodMenu />} bgColor="#28a745" href="/learning">
        학습하기
      </HomeButton>
      <HomeButton icon={<RiRepeat2Line />} bgColor="#ffc107" href="/404">
        복습하기
      </HomeButton>
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
