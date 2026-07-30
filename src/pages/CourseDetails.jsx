import { useParams } from "react-router-dom";
import { useCourses } from "../hooks/useCourses";
import { FavouriteButton } from "../components/button/FavouriteButton";

export function CourseDetails() {
  const { id } = useParams();
  const { courses, isloading } = useCourses();

  if (isloading) {
    return <p>Loading course details</p>;
  }

  const course = courses.find((c) => String(c.id) === String(id));

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className="course-details-container">
      <div className="course-details">
        <div className="course-image">
          <img src={course.image} alt={course.title} />
        </div>
        <div className="course-details-info">
          <h3>
            <strong>
              <span>Title: </span>
              {course.title}
            </strong>
          </h3>
          <p>
            <strong>
              <span>Description: </span>
              {course.description}
            </strong>
          </p>
          <p>
            <strong>
              <span>Instructor: </span>
              {course.instructor}
            </strong>
          </p>
          <p>
            <strong>
              <span>difficulty: </span>
              {course.difficulty}
            </strong>
          </p>
          <p>
            <strong>
              <span>Students: </span>
              {course.students}
            </strong>
          </p>
          <p>
            <strong>
              <span>Duration: </span>
              {course.duration}
            </strong>
          </p>
        </div>
      <FavouriteButton/>
      </div>
    </div>
  );
}
