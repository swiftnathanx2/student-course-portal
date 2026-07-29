// import { use } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { CourseList } from "../courses/CourseList.";
import { useCourses } from "../hooks/useCourses";

export function Dashboard() {
  const { courses, isloading, error } = useCourses();

  const courseState = () => ({ courses, isloading, error });

  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="course-container">
        <CourseList courseState={ courseState } />
      </div>
    </div>
  );
}
