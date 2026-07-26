import { useNavigate } from "react-router-dom";
import { lessonsData } from "../data/lessonsData";

export default function LessonNav({ currentId }) {
  const navigate = useNavigate();
  const currentIndex = lessonsData.findIndex((l) => l.id === currentId);

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? lessonsData.length - 1 : currentIndex - 1;
    navigate(lessonsData[prevIndex].path);
  };

  const goToNext = () => {
    const nextIndex = currentIndex === lessonsData.length - 1 ? 0 : currentIndex + 1;
    navigate(lessonsData[nextIndex].path);
  };

  return (
    <div className="lesson-nav">
      <button type="button" className="nav-button" onClick={goToPrevious}>
        Previous Lesson
      </button>
      <button type="button" className="nav-button primary" onClick={goToNext}>
        Next Lesson
      </button>
    </div>
  );
}
