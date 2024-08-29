import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import Home from "./pages/Home";
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";
import PaymentLayout from "./layouts/PaymentLayout";
import PresidentLayout from "./layouts/PresidentLayout";
import UserLayout from "./layouts/UserLayout";
import ResetPsw from "./pages/ResetPsw";

const Feedback = loadable(() => import("./pages/Feedback"));
const AboutUs = loadable(() => import("./pages/AboutUs"));
const Gallery = loadable(() => import("./pages/Gallery"));
const Donation = loadable(() => import("./pages/Donation"));
const UploadDonationReceipt = loadable(() =>
  import("./pages/UploadDonationReceipt")
);
const AccountantNav = loadable(() => import("./pages/AccountantNav"));
const CommitteeView = loadable(() => import("./pages/CommitteeView"));
const Acknowledge = loadable(() => import("./pages/Acknowledge"));
const AcknowledgeDonation = loadable(() =>
  import("./pages/AcknowledgeDonation")
);
const Login = loadable(() => import("./pages/Login"));
const Payment = loadable(() => import("./pages/Payment"));
const UploadReceipt = loadable(() => import("./pages/UploadReceipt"));
const PaymentSuccess = loadable(() => import("./pages/PaymentSuccess"));
const PresidentView = loadable(() => import("./pages/PresidentView"));
// const PresidentUser = loadable(() => import("./pages/PresidentUser"));
const PresidentCRUD = loadable(() => import("./pages/PresidentCRUD"));
const AddMembers = loadable(() => import("./pages/AddMembers"));
const UserNav = loadable(() => import("./pages/UserNav"));
const Search = loadable(() => import("./components/MarketPlace/Search"));
const Display = loadable(() => import("./components/MarketPlace/Display"));
const RegistrationOne = loadable(() => import("./pages/RegistrationOne"));
const RegistrationTwo = loadable(() => import("./pages/RegistrationTwo"));
const RegistrationThree = loadable(() => import("./pages/RegistrationThree"));
const UploadAnnouncement = loadable(() => import("./pages/UploadAnnouncement"));
const ViewAnnouncements = loadable(() => import("./pages/ViewAnnouncements"));
const UploadEvent = loadable(() => import("./pages/UploadEvent"));
const UploadGallery = loadable(() => import("./pages/UploadGallery"));
const UserView = loadable(() => import("./pages/UserView"));
const UserID = loadable(() => import("./pages/UserID"));

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
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/upload-donation-receipt",
        element: <UploadDonationReceipt />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/resetpsw",
        element: <ResetPsw />,
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
      {
        path: "/market-places",
        element: <Search />,
      },
      {
        path: `/market-places/display`,
        element: <Display />,
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
        path: "/accountant-nav",
        element: <AccountantNav />,
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
        path: "/acknowledge-donation",
        element: <AcknowledgeDonation />,
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
        path: "/add-members",
        element: <AddMembers />,
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
        path: "/view-announcement",
        element: <ViewAnnouncements />,
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
      // {
      //   path: "/email-broadcast",
      //   element: <EmailBroadcast />,
      // },
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/user-idcard",
        element: <UserID />,
      },
    ],
  },
]);
