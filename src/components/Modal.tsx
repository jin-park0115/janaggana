import { useEffect } from "react";
import styled from "styled-components";
import { DataItem } from "../api/words";

type Mode = "learn" | "quiz";

type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  mode?: Mode;
  wordData?: DataItem | null;
};

export function Modal({ isOpen, onClose, mode, wordData }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <ModalStyle onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          {mode === "learn" ? (
            <ModalWrap>
              <h2>학습하기</h2>
              <ModalItem>
                <ModalCategory>
                  <p className="category">카테고리</p>
                  <p className="category">타입</p>
                </ModalCategory>
                <ModalImg>이미지</ModalImg>
                <ModalWordsWrap>
                  <div className="word">"{wordData?.word}"</div>
                  <div className="meaning">{wordData?.meaning}</div>
                  <div className="example">
                    예시: Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Aut, dolores maxime corrupti eum illo optio voluptatem
                    aspernatur id ut autem inventore sint facere eaque eveniet
                    fuga aliquid reiciendis libero. Assumenda?
                  </div>
                </ModalWordsWrap>
              </ModalItem>
            </ModalWrap>
          ) : (
            <>
              <p>퀴즈 모달</p>
            </>
          )}
        </div>
      </ModalStyle>
    </>
  );
}

const ModalStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  overflow: hidden;
  .modal-box {
    margin: 0 auto;
    width: 40%;
    background-color: aliceblue;
    border-radius: 14px;
    padding: 14px;
    @media (max-width: 1024px) {
      width: 70%;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const ModalWrap = styled.div``;
const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const ModalCategory = styled.div`
  display: flex;
  gap: 10px;
  .category {
    font-size: 0.9rem;
    padding: 4px 8px;
    border: 2px solid #dd8650;
    border-radius: 10px;
    text-align: center;
    background-color: #e2a680;
  }
`;
const ModalImg = styled.div`
  border-radius: 10px;
  min-height: 150px;
  background-color: antiquewhite;
`;

const ModalWordsWrap = styled.div`
  border: 1px solid #222;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;

  .word {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .meaning {
    width: 100%;
    font-size: 0.9rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .example {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 2rem;
  }
`;
