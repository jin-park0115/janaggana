import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchWords } from "../api/words";
import { NavBar } from "../components/NavBar";
import { WordsList } from "../components/WordsList";
import { SelectBox } from "../components/SelectBox";
import { useWordsStore } from "../store/wordStore";

export function LearningPage() {
  const [type, setType] = useState("all");
  const [level, setLevel] = useState("all");

  const { results, setResults } = useWordsStore();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchWords(type, level); //mock api에서 받아온 단어들
      setResults(data);
    };
    getData();
  }, [type, level, setResults]);

  return (
    <Container>
      <h2>학습하기</h2>
      <SelectWrap>
        <SelectBox
          value={type}
          onChange={setType}
          options={[
            { value: "all", label: "전체유형" },
            { value: "expression", label: "생활영어" },
            { value: "vocab", label: "단어" },
          ]}
        ></SelectBox>
        <SelectBox
          value={level}
          onChange={setLevel}
          options={[
            { value: "all", label: "전체 난이도" },
            { value: "easy", label: "쉬움" },
            { value: "normal", label: "보통" },
            { value: "hard", label: "어려움" },
          ]}
        />
      </SelectWrap>
      <p className="result-title">총 {results.length}개 결과</p>
      <WordsList results={results} />
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
    margin-bottom: 10px;
    font-size: 20px;
    text-align: center;
    color: #333;
  }
  .result-title {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 450px) {
    .result-title {
      font-size: 0.9rem;
    }
  }
`;
const SelectWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 1.5rem;
`;
