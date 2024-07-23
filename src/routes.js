import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AccountantView from "./pages/AccountantView";
import CommitteeView from "./pages/CommitteeView";
import Acknowledge from "./pages/Acknowledge";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import PresidentView from "./pages/PresidentView";
import RegistrationOne from "./pages/RegistrationOne";
import RegistrationTwo from "./pages/RegistrationTwo";
import RegistrationThree from "./pages/RegistrationThree";
import UploadAnnouncement from "./pages/UploadAnnouncement";
import UploadEvent from "./pages/UploadEvent";
import UploadGallery from "./pages/UploadGallery";
import UserView from "./pages/UserView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/accountant-view",
    element: <AccountantView />,
  },
  {
    path: "/committee-view",
    element: <CommitteeView />,
  },
  {
    path: "/acknowledge",
    element: <Acknowledge />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/payment-success",
    element: <PaymentSuccess />,
  },
  {
    path: "/president-view",
    element: <PresidentView />,
  },
  {
    path: "/registration-one",
    element: <RegistrationOne />,
  },

  {
    path: "/registration-two",
    element: <RegistrationTwo />,
  },
  {
    path: "/registration-three",
    element: <RegistrationThree />,
  },
  {
    path: "/upload-announcement",
    element: <UploadAnnouncement />,
  },
  {
    path: "/upload-event",
    element: <UploadEvent />,
  },
  {
    path: "/upload-gallery",
    element: <UploadGallery />,
  },
  {
    path: "/user-view",
    element: <UserView />,
  },
]);
