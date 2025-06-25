import styled from "styled-components";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { LoginButton } from "../components/ui/ui_button/LoginButton";
import { SocialButton } from "../components/ui/ui_button/SocialButton";
import { LogintInput } from "../components/ui/ui_input/LoginInput";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <Container>
      <BackArrow to="/">
        <IoArrowBackCircleOutline />
      </BackArrow>
      <h1>로그인</h1>
      <LoginForm>
        <LoginStyle>
          <LogintInput
            type="email"
            placeholder="이메일 입력해주세요"
            id="아이디"
          />
        </LoginStyle>
        <PasswordStyle>
          <LogintInput
            type="password"
            id="비밀번호"
            placeholder="비밀번호를 입력해주세요."
          />
        </PasswordStyle>

        <LoginWrap>
          <LoginButton $bgColor="#4f73d9">Login</LoginButton>
        </LoginWrap>
      </LoginForm>

      <SocialForm>
        <SocialBtnWrap>
          <SocialButton
            to="/"
            $bgColor="#FEE500"
            $color="#222"
            $boxShadowRGB="254, 229, 0"
          >
            카카오로 시작하기
          </SocialButton>
          <SocialButton to="/" $bgColor="#03C75A" $boxShadowRGB="3, 199, 90">
            네이버로 시작하기
          </SocialButton>
          <SocialButton to="/" $bgColor="#4285F4" $boxShadowRGB="66, 133, 244">
            구글로 시작하기
          </SocialButton>
        </SocialBtnWrap>
      </SocialForm>
    </Container>
  );
}

const baseStyle = `
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  ${baseStyle}
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 10px 20px 0px 20px;
  gap: 20px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const BackArrow = styled(Link)`
  position: absolute;
  top: 10px;
  left: 13%;
  color: #8dabfb;
  font-size: 2rem;
  cursor: pointer;
`;

const LoginForm = styled.div`
  width: 100%;
  ${baseStyle}
  justify-content: center;
  padding: 4px 12px;
  gap: 14px;
  margin-bottom: 1.5rem;
`;

const LoginStyle = styled.div`
  ${baseStyle}
`;

const PasswordStyle = styled.div`
  ${baseStyle}
`;

const LoginWrap = styled.div`
  ${baseStyle}
  align-items: center;
`;

const SocialForm = styled.div`
  ${baseStyle}
  width: 100%;
  gap: 10px;
  .social-title {
    text-align: center;
  }
`;

const SocialBtnWrap = styled.div`
  ${baseStyle}
  gap: 1.5rem;
`;
