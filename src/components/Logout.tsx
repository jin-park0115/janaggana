import { signOut } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../fiebase";
import { useUserStore } from "../store/userStore";

export function Logout() {
  const setUser = useUserStore((set) => set.setUser);

  const handleLogout = async () => {
    try {
      await signOut(auth); // firebase로그아웃
      setUser(null); //zustand 비우기
    } catch (error) {
      alert("로그아웃 실패");
    }
  };

  return <LogoutStyle onClick={handleLogout}>로그아웃</LogoutStyle>;
}

const LogoutStyle = styled.button`
  padding: 10px;
  background-color: #ff5e5e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
