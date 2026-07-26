import { NavLink } from "react-router-dom";
import { lessonsData } from "../data/lessonsData";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>قائمة الدروس</h2>
      <nav>
        {lessonsData.map((item, index) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `lesson-link ${isActive ? "active" : ""}`
            }
          >
            <span>{index + 1}</span>
            <div>
              <strong>{item.title}</strong>
              <small>{item.summary}</small>
            </div>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
