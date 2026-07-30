// import { use } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { CourseList } from "../courses/CourseList.";
import { useCourses } from "../hooks/useCourses";

export function Dashboard() {
  const { courses, isloading, error } = useCourses();

  if (isloading) {
    return <p>loading courses ....</p>;
  }

  if (error) {
    return <p>Error : {error}</p>;
  }

  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="course-container">
        <CourseList courses={courses} />
      </div>
    </div>
  );
}
