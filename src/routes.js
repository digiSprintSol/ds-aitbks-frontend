import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import Home from "./pages/Home";

const AccountantView = loadable(() => import("./pages/AccountantView"));
const CommitteeView = loadable(() => import("./pages/CommitteeView"));
const Acknowledge = loadable(() => import("./pages/Acknowledge"));
const Login = loadable(() => import("./pages/Login"));
const Payment = loadable(() => import("./pages/Payment"));
const PaymentSuccess = loadable(() => import("./pages/PaymentSuccess"));
const PresidentView = loadable(() => import("./pages/PresidentView"));
const RegistrationOne = loadable(() => import("./pages/RegistrationOne"));
const RegistrationTwo = loadable(() => import("./pages/RegistrationTwo"));
const RegistrationThree = loadable(() => import("./pages/RegistrationThree"));
const UploadAnnouncement = loadable(() => import("./pages/UploadAnnouncement"));
const UploadEvent = loadable(() => import("./pages/UploadEvent"));
const UploadGallery = loadable(() => import("./pages/UploadGallery"));
const UserView = loadable(() => import("./pages/UserView"));

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
