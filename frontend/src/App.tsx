import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [courses, setCourses] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5043/api/course")
      .then((res) => setCourses(res.data));
  }, []);

  return (
    <div>
      <h1>StockAcademy</h1>

      <h2>Courses</h2>

      <ul>
        {courses.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
