import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { auth } from "./fiebase";
import { ActivityPage } from "./pages/ActivityPage";
import { HomePage } from "./pages/HomePage";
import { LearningPage } from "./pages/LearningPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { QuizPage } from "./pages/QuizPage";
import { SystemPage } from "./pages/SystemPage";
import { useUserStore } from "./store/userStore";

function App() {
  const setUser = useUserStore((set) => set.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [setUser]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/learning" element={<LearningPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/system" element={<SystemPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
