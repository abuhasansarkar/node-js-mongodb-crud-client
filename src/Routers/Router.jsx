import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import UpdateUser from "../components/UpdateUser/UpdateUser";
import Users from "../components/Users/Users";

export const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>,
               },
               {
                    path: '/users',
                    element: <Users></Users>,
                    loader: () => fetch(`http://localhost:5000/users`)
               },
               {
                    path: '/update/:id',
                    element: <UpdateUser></UpdateUser>,
                    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
               }
          ]
     }
])