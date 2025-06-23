import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { ResultList } from "../components/ResultList";
import { SelectBox } from "../components/SelectBox";

type DataItem = {
  id: number;
  meaning: string;
  type: string;
  level: string;
  word: string;
};

const mockData: DataItem[] = [
  {
    id: 1,
    meaning: "공연 전에 행운을 빈다는 뜻의 표현입니다.",
    type: "expression",
    level: "normal",
    word: "Break a leg",
  },
  {
    id: 2,
    meaning: "쉽게 알 수 있는, 명백하다는 뜻입니다.",
    type: "vocab",
    level: "easy",
    word: "Obvious",
  },
  {
    id: 3,
    meaning: "비가 억수로 쏟아진다는 뜻의 표현입니다.",
    type: "expression",
    level: "hard",
    word: "It`s raining cats and dogs",
  },
]; // mockdata

export function Learning() {
  const [type, setType] = useState("all");
  const [level, setLevel] = useState("all");
  const [results, setResults] = useState<DataItem[]>([]);

  const fetchData = async () => {
    const response = await axios.get("/mock-api", {
      params: { type, level },
      adapter: async (config) => {
        const filtered = mockData.filter((item) => {
          const matchType = type === "all" || item.type === type;
          const matchLevel = level === "all" || item.level === level;
          return matchType && matchLevel;
        });
        return {
          data: filtered,
          status: 200,
          statusText: "ok",
          headers: {},
          config,
        };
      },
    });
    setResults(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [type, level]);

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
      <ResultList results={results} />
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
`;
const SelectWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
