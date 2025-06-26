import { useState } from "react";
import styled from "styled-components";
import { useWordsStore } from "../store/wordStore";
import { DataItem } from "../type/DataItemType";
import { Modal } from "./Modal";

export function WordsList() {
  const { results } = useWordsStore(); //zustand stroe에서 가져옴
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<DataItem | null>(null);

  return (
    <>
      <List>
        {results.map((item) => (
          <Card
            onClick={() => {
              setSelectedWord(item); //클릭시 저장되는
              setModalOpen(true);
            }}
            key={item.id}
          >
            <BadgeRow>
              <Badge $type>
                {item.type === "expression" ? "생활영어" : "단어"}
              </Badge>
              <Badge $level={item.level}>
                {item.level === "easy"
                  ? "쉬움"
                  : item.level === "normal"
                  ? "보통"
                  : "어려움"}
              </Badge>
            </BadgeRow>
            <Word>"{item.word}"</Word>
            <Meaning>{item.meaning}</Meaning>
          </Card>
        ))}
      </List>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode="learn"
        wordData={selectedWord}
      />
    </>
  );
}

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Card = styled.li`
  background-color: #ededed;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 12px;
  cursor: pointer;
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const Badge = styled.span<{ $type?: boolean; $level?: string }>`
  display: inline-block;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  color: white;
  background-color: ${({ $type, $level }) =>
    $type
      ? "#f4b400"
      : $level === "easy"
      ? "#57c4ad"
      : $level === "normal"
      ? "#90a4ae"
      : "#ef5350"};
  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

const Word = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 4px 0;
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

const Meaning = styled.p`
  font-size: 14px;
  color: #444;
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;
