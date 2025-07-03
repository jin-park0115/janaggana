import { signOut } from "firebase/auth";
import styled from "styled-components";
import Swal from "sweetalert2";
import { auth } from "../fiebase";
import { useUserStore } from "../store/userStore";

export function Logout() {
  const setUser = useUserStore((set) => set.setUser);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "로그아웃 하시겠습니까?",
      text: "정말로 로그아웃하시려면 확인을 눌러주세요.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "로그아웃",
      cancelButtonText: "취소",
    });

    if (!result.isConfirmed) return;

    try {
      await signOut(auth); // firebase 로그아웃
      setUser(null); // zustand 상태 초기화
      await Swal.fire("로그아웃 완료", "", "success");
    } catch (error) {
      Swal.fire("로그아웃 실패", "다시 시도해주세요.", "error");
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
