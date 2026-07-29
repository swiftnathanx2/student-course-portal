// import { useCourses } from "../hooks/useCourses";

export function CourseList({ courseState }) {
  const data = courseState();

  if (data.isloading) {
    return <p>loading courses ....</p>;
  }

  if (data.error) {
    return <p>Error : {data.error}</p>;
  }
  return (
    <div>
      <div className="course-list">
        <div className="header">
          <h3>Course List</h3>
        </div>
        <div className="course-grid">
          {data.courses.map((course) => (
            <article key={course.id} className="course-card">
              <img
                src={course.image}
                alt="course image"
                className="course-image"
              />
              <div className="course-info">
                <h3>
                  <strong>Title:</strong>
                  {course.title}
                </h3>
                <p>
                  <strong>Instructor:{course.instructor}</strong>
                </p>
                <p>
                  <strong>Difficulty:{course.difficulty}</strong>
                </p>
                <p>
                  <strong>Students:{course.students}</strong>
                </p>
                <p>
                  <strong>Duration:{course.duration}</strong>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
