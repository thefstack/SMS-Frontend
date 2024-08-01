import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import AdminHome from "./pages/AdminHome";
import AdminDashboard from "./components/AdminDashboard";
import AdminStudent from "./components/AdminStudent";
import AdminTeacher from "./components/AdminTeacher";
import AdminSubject from "./components/AdminSubject";
import AdminClass from "./components/AdminClass";
import AdminAttendance from "./components/AdminAttendance";
import AdminUser from "./components/AdminUser";
import { StudentProvider } from "./Context/studentContext";
import ViewStudent from "./components/view/ViewStudentData";
import { TeacherProvider } from "./Context/teacherContext";
import ViewTeacherData from "./components/view/ViewTeacherData";
import ViewSubjectData from "./components/view/ViewSubjectData";
import { SubjectProvider } from "./Context/subjectContext";
import { ClassProvider } from "./Context/classContext";
import ViewClassData from "./components/view/ViewClassData";
import ViewUserData from "./components/view/ViewUserData";
import { UserProvider } from "./Context/userContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: (
      <StudentProvider>
        <TeacherProvider>
          <SubjectProvider>
            <ClassProvider>
              <AdminHome />
            </ClassProvider>
          </SubjectProvider>
        </TeacherProvider>
      </StudentProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <StudentProvider>
        <TeacherProvider>
          <SubjectProvider>
            <ClassProvider>
              <AdminDashboard />
            </ClassProvider>
          </SubjectProvider>
        </TeacherProvider>
      </StudentProvider>,
        errorElement: <ErrorPage />,
      },
      {
        path: "student",
        element:<AdminStudent />,
        errorElement: <ErrorPage />,
      },
      {
        path: "student/:id",
        element:<ViewStudent />,
        errorElement: <ErrorPage />,
      },

      {
        path: "teacher",
        element: <AdminTeacher />,
        errorElement: <ErrorPage />,
      },
      {
        path: "teacher/:id",
        element: <ViewTeacherData />,
        errorElement: <ErrorPage />,
      },
      {
        path: "subject",
        element: <AdminSubject />,
        errorElement: <ErrorPage />,
      },
      {
        path: "subject/:id",
        element: <ViewSubjectData />,
        errorElement: <ErrorPage />,
      },
      {
        path: "class",
        element: <AdminClass />,
        errorElement: <ErrorPage />,
      },
      {
        path: "class/:id",
        element: <ViewClassData />,
        errorElement: <ErrorPage />,
      },
      {
        path: "attendance",
        element: <AdminAttendance />,
        errorElement: <ErrorPage />,
      },
      {
        path: "user",
        element: <AdminUser />,
        errorElement: <ErrorPage />,
      },
      {
        path: "user/:id",
        element: <ViewUserData />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
    errorElement: <ErrorPage status="200" message="Error" />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
