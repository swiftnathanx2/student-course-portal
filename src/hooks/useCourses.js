import { useEffect, useState } from "react";
import coursesData from "../data/courses";

export function useCourses() {
  const [courses, setCourses] = useState([]);

  const [isloading, setIsloading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    function fetchCourses() {
      try {
        setIsloading(true);
        setError(null);

        if (!coursesData) {
          throw new Error("no course data found!");
        }

        setCourses(coursesData);
      } catch (error) {
        setError(error.message || "An unexpected error occurred!");
      } finally {
        setIsloading(false);
      }
    }

    fetchCourses();
  }, []);

  return { courses, isloading, error };
}
