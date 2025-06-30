import styled from "styled-components";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { LoginButton } from "../components/ui/ui_button/LoginButton";
import { SocialButton } from "../components/ui/ui_button/SocialButton";
import { LogintInput } from "../components/ui/ui_input/LoginInput";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../fiebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { useUserStore } from "../store/userStore";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setUser = useUserStore((state) => state.setUser);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
      alert("로그인 완료");
      navigate("/");
    } catch (error) {
      alert("로그인 실패");
    }
  };

  return (
    <Container>
      <BackArrow to="/">
        <IoArrowBackCircleOutline />
      </BackArrow>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin}>
        <LoginStyle>
          <LogintInput
            type="email"
            placeholder="이메일 입력해주세요"
            id="아이디"
            onEmailPW={(e) => setEmail(e.target.value)}
          />
        </LoginStyle>
        <PasswordStyle>
          <LogintInput
            type="password"
            id="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            onEmailPW={(e) => setPassword(e.target.value)}
          />
        </PasswordStyle>

        <LoginWrap>
          <LoginButton $bgColor="#4f73d9" type="submit">
            Login
          </LoginButton>
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
  h1 {
    color: #8dabfb;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  @media (max-width: 500px) {
    width: 100%;
    h1 {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 430px) {
    width: 100%;
    h1 {
      font-size: 1.4rem;
    }
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

const LoginForm = styled.form`
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
