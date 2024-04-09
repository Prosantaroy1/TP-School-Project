import { createBrowserRouter } from "react-router-dom";
import Main from "../component/layout/Main";
import Errorpage from "../component/pages/Errorpages/Errorpage";
import Home from "../component/pages/Home/Home";
import About from "../component/pages/About/About";
import Courses from "../component/pages/Coursespage/Courses";

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
            element: <Courses/>
        }

    ]
    },
  ]);

export default router; 