// import { useState } from "react";
import styled from "styled-components";
import { useUserStore } from "../store/userStore";

export function Badge() {
  const user = useUserStore((state) => state.user);
  return (
    <>
      <BadgeWrap>
        <div>🏆</div>
        <User>
          <p>{user ? user.email : "홍길동"}님의 뱃지</p>
          <span>오늘도 화이팅!</span>
        </User>
      </BadgeWrap>
    </>
  );
}

const BadgeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 10px;
`;

const User = styled.div`
  p {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
  }
  span {
    font-size: 0.95rem;
    color: #666;
  }
`;
