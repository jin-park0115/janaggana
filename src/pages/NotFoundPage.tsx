import styled from "styled-components";
import { HomeButton } from "../components/ui/ui_button/HomeButton";

export function NotFoundPage() {
  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>페이지를 찾을 수 없습니다</ErrorTitle>
      <ErrorDescription>
        요청하신 페이지가 존재하지 않거나
        <br />
        주소가 변경 또는 삭제되었을 수 있습니다.
      </ErrorDescription>
      <HomeButton href="/" bgColor="#ff4c4c">
        홈으로 돌아가기
      </HomeButton>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  padding: 0 20px;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #ff4c4c;
  margin-bottom: 1rem;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ErrorDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
`;
