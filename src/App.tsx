import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ActivityPage } from "./pages/ActivityPage";
import { HomePage } from "./pages/HomePage";
import { LearningPage } from "./pages/LearningPage";
import { LoginPage } from "./pages/LoginPage";
import { QuizPage } from "./pages/QuizPage";
import { SystemPage } from "./pages/SystemPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/learning" element={<LearningPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/system" element={<SystemPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
