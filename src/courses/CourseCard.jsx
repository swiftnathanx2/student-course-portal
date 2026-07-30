import { Link, useNavigate } from "react-router-dom";

export function CourseCard({ course }) {
  const navigate = useNavigate()
  return (
    <Link to={`/courses/${course.id}`}>
      <article className="course-card" onClick={() => navigate(`/courses/${course.id}`)}>
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
