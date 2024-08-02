import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import Home from "./pages/Home";
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";
import PaymentLayout from "./layouts/PaymentLayout";
import PresidentLayout from "./layouts/PresidentLayout";

const AccountantView = loadable(() => import("./pages/AccountantView"));
const CommitteeView = loadable(() => import("./pages/CommitteeView"));
const Acknowledge = loadable(() => import("./pages/Acknowledge"));
const Login = loadable(() => import("./pages/Login"));
const Payment = loadable(() => import("./pages/Payment"));
const UploadReceipt = loadable(() => import("./pages/UploadReceipt"));
const PaymentSuccess = loadable(() => import("./pages/PaymentSuccess"));
const PresidentView = loadable(() => import("./pages/PresidentView"));
// const PresidentUser = loadable(() => import("./pages/PresidentUser"));
const PresidentCRUD = loadable(() => import("./pages/PresidentCRUD"));
const UserNav = loadable(() => import("./pages/UserNav"));
const RegistrationOne = loadable(() => import("./pages/RegistrationOne"));
const RegistrationTwo = loadable(() => import("./pages/RegistrationTwo"));
const RegistrationThree = loadable(() => import("./pages/RegistrationThree"));
const UploadAnnouncement = loadable(() => import("./pages/UploadAnnouncement"));
const UploadEvent = loadable(() => import("./pages/UploadEvent"));
const UploadGallery = loadable(() => import("./pages/UploadGallery"));
const UserView = loadable(() => import("./pages/UserView"));

export const router = createBrowserRouter([
  // Default view
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  // Auth view
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/registration-one",
        element: <RegistrationOne />,
      },

      {
        path: "/auth/registration-two",
        element: <RegistrationTwo />,
      },
      {
        path: "/auth/registration-three",
        element: <RegistrationThree />,
      },
    ],
  },

  // Payment view
  {
    path: "/",
    element: <PaymentLayout />,
    children: [
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/upload-receipt",
        element: <UploadReceipt />,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
    ],
  },

  // president view

  {
    path: "/",
    element: <PresidentLayout />,
    children: [
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
        path: "/president-view",
        element: <PresidentView />,
      },
      {
        path: "/president-crud",
        element: <PresidentCRUD />,
      },
      {
        path: "/user-nav",
        element: <UserNav />,
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
    ],
  },
]);
