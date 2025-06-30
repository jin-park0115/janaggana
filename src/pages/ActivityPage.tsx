import activityBoy from "../assets/janaggana_character.png";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { useUserStore } from "../store/userStore";

export function ActivityPage() {
  const user = useUserStore((state) => state.user);

  return (
    <Container>
      <h2>{user ? user.email : "홍길동 "}님의 학습활동</h2>
      <SummaryWrap>
        <img className="activity-boy" src={activityBoy} alt="활동 캐릭터" />
        <div className="summary-container">
          <div className="summary-box">
            <div className="summary-icon">📊</div>
            <div className="summary-title">완료문제</div>
            <div className="summary-data">7 / 300 (3%)</div>
          </div>
          <div className="summary-box">
            <div className="summary-icon">🧭</div>
            <div className="summary-title">마지막 공부일</div>
            <div className="summary-data">25.06.10</div>
          </div>
        </div>
      </SummaryWrap>
      <NavBar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const SummaryWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  .activity-boy {
    width: 120px;
    position: absolute;
    top: -30px;
    z-index: 99;
    object-fit: contain;
  }
  .summary-container {
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 20px 20px;
    border: 1px solid #ddd;
    border-radius: 12px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: 1;
    margin-top: 100px;
  }
  .summary-box {
    flex: 1;
    align-items: center;
    text-align: center;
  }
  .summary-icon {
    font-size: 20px;
    margin-bottom: 5px;
  }
  .summary-title {
    font-size: 14px;
    color: #555;
  }
  .summary-data {
    font-size: 15px;
    font-weight: bold;
    color: #222;
  }
`;
