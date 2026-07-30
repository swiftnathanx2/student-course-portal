// import { useCourses } from "../hooks/useCourses";
import { Navbar } from "../components/layout/Navbar";
import { CourseCard } from "./CourseCard";

export function CourseList({ courses }) {
  return (
    <div>
      
      <div className="course-list">
        <Navbar />
        <div className="header">
          <h3>Course List</h3>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
