import styled from "styled-components";

type Mode = "learn" | "quiz";

type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  mode?: Mode;
};

export function Modal({ isOpen, onClose, mode }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <ModalStyle onClick={onClose}>
        <div className="modal-box">
          <p>모달</p>

          {mode === "learn" ? (
            <>
              <p>학습 모달</p>
            </>
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

  .modal-box {
    margin: 0 auto;
    width: 40%;
    height: 65%;
    background-color: aliceblue;
    border-radius: 14px;
    padding: 14px;
  }
`;
