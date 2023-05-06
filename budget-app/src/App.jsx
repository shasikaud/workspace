// ref: https://www.youtube.com/watch?v=KeeYaNnWd1k&list=PL4cUxeGkcC9iNnY07bh_UPaRIQZcJfARY&index=6
// resume: chapter 10 https://www.youtube.com/watch?v=qre4LgXyTPo&list=PL4cUxeGkcC9iNnY07bh_UPaRIQZcJfARY&index=10

// RRD
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// library
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

// Layouts
import Main, { mainLoader } from "./layouts/Main";

// actions
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Dashboard/>,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error/>
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
  {
    path: "*",
    element: <Error/>
  }
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
    {/* add toast container here makes this avaible everywhere within the App*/}
    <ToastContainer /> 
  </div>;
}

export default App;
