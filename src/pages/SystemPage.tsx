import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";

export function SystemPage() {
  const [login, setLogin] = useState<boolean>(false);
  console.log(setLogin);
  return (
    <Container>
      <h2>설정</h2>
      <UserInfoStyle>
        {login ? (
          <UserInfoWrap>
            <ProfileStyle>이미지</ProfileStyle>
            <TitleStyle>
              <p className="user-name">이름</p>
              <p className="user-modify">프로필 수정하기</p>
            </TitleStyle>
          </UserInfoWrap>
        ) : (
          <UserInfoWrap>
            <GoLogin to="/login">
              <p>로그인 하러가기</p>
            </GoLogin>
          </UserInfoWrap>
        )}

        <InfoWrap>
          <Info>선생님 소개</Info>
          <Info>1 : 1문의</Info>
          <Info>개인정보처리방침</Info>
          <Info>이용약관</Info>
        </InfoWrap>
      </UserInfoStyle>
      <NavBar />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  padding: 20px;
`;

const UserInfoStyle = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
`;

const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 10px;
`;

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #222;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const TitleStyle = styled.div`
  .user-name {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .user-modify {
    font-size: 0.9rem;
    color: #a79e9e;
  }
`;

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 505px) {
    border: 1px solid #222;
    background: #222;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    position: absolute;
    padding: 10px 10px 10px 10px;
    bottom: 60px;
    left: 0;
  }
`;

const Info = styled.div`
  padding: 10px;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  background-color: #d3d1d1;
  @media (max-width: 505px) {
    padding: 8px;
    border-radius: 4px;
    font-size: 0.7rem;
  }
`;

const GoLogin = styled(Link)`
  width: 100%;
  font-size: 1.1rem;
`;
