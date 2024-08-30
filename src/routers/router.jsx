import { createBrowserRouter } from "react-router-dom";
import Main from "../component/layout/Main";
import Errorpage from "../component/pages/Errorpages/Errorpage";
import Home from "../component/pages/Home/Home";
import About from "../component/pages/About/About";
import Login from "../component/pages/Login/Login";
import Register from "../component/pages/Register/Register";
import CoursesDetails from "../component/pages/CoursesDetails/CoursesDetails";
import CourseMain from "../component/pages/CourseMain/CourseMain";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Errorpage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/courses',
            element: <CourseMain/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',       
          element: <Register/>
        },
        {
          path: '/details/:id',
          element: <CoursesDetails/>,
          loader: ()=> fetch('../../public/courses.json')
        }

    ]
    },
  ]);

export default router; 