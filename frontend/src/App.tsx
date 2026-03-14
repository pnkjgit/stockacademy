import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { LessonPage } from "./pages/LessonPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/module/:moduleId/lesson/:lessonId"
            element={<LessonPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
