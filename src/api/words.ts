import axios from "axios";

export type DataItem = {
  id: number;
  word: string;
  meaning: string;
  type: string;
  level: string;
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
];

export async function fetchWords(
  type: string,
  level: string
): Promise<DataItem[]> {
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

  return response.data;
}
