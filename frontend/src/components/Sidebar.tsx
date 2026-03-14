import { Link } from "react-router-dom";
import "./Sidebar.css";

interface SidebarProps {
  lessons: Array<{ id: number; title: string }>;
  currentLessonId: number;
  moduleId: number;
}

export function Sidebar({ lessons, currentLessonId, moduleId }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Topics</h3>
        <span className="topic-count">{lessons.length}</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link
                to={`/module/${moduleId}/lesson/${lesson.id}`}
                className={`sidebar-link ${
                  currentLessonId === lesson.id ? "active" : ""
                }`}
              >
                <span className="lesson-number">{lesson.id}</span>
                <span className="lesson-title">{lesson.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
