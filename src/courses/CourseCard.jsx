import { Link } from "react-router";

export function CourseCard({ course }) {
  return (
    <Link to="/coursedetails">
      <article className="course-card">
        <img src={course.image} alt={course.title} className="course-image" />
        <div className="course-info">
          <h3>
            <strong>Title:</strong>
            {course.title}
          </h3>
          <p>
            <strong>Instructor:</strong>
            {course.instructor}
          </p>
          <p>
            <strong>Difficulty:</strong>
            {course.difficulty}
          </p>
          <p>
            <strong>Student:</strong>
            {course.students}
          </p>
        </div>
      </article>
    </Link>
  );
}
