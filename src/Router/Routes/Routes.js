import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Reviews from "../../Pages/Reviews/Reviews";
import Service from "../../Pages/Service/Service";
import ServiceDescription from "../../Pages/ServiceDescription/ServiceDescription";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/service/:id",
        element: <ServiceDescription></ServiceDescription>,
        loader: ({ params }) =>
          fetch(
            `https://travel-services-server.vercel.app/service/${params.id}`,
          ),
      },
      {
        path: "/reviews/:id",
        element: <Reviews></Reviews>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRouter>
            <Checkout></Checkout>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://travel-services-server.vercel.app/service/${params.id}`,
          ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRouter>
            <MyReviews></MyReviews>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
