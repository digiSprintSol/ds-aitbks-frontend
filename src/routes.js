import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import Home from "./pages/Home";
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";
import PaymentLayout from "./layouts/PaymentLayout";
import PresidentLayout from "./layouts/PresidentLayout";
import UserLayout from "./layouts/UserLayout";
import ForgotPassword from "./components/ResetPassword/ForgotPassword";
import OtpVerify from "./components/ResetPassword/OtpVerify";
import NewPassword from "./components/ResetPassword/newPsw";

const Feedback = loadable(() => import("./pages/Feedback"));
const Trustee = loadable(() => import("./pages/Trustee"));
const Patron = loadable(() => import("./pages/Patron"));
const LifeMembers = loadable(() => import("./pages/LifeMembers"));
const AboutUs = loadable(() => import("./pages/AboutUs"));
const Gallery = loadable(() => import("./pages/Gallery"));
const Awards = loadable(() => import("./pages/Awards"));
const Events = loadable(() => import("./pages/Events"));
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
const PaymentDonationSuccess = loadable(() =>
  import("./pages/PaymentDonationSuccess")
);
const PresidentView = loadable(() => import("./pages/PresidentView"));
const PresidentAnimationNav = loadable(() =>
  import("./pages/PresidentAnimationNav")
);
const EditRoleManagement = loadable(() => import("./pages/EditRoleManagement"));
const AdminAnimationNav = loadable(() => import("./pages/AdminAnimationNav"));
const AdminNav = loadable(() => import("./pages/AdminNav"));
// const PresidentUser = loadable(() => import("./pages/PresidentUser"));
const PresidentCRUD = loadable(() => import("./pages/PresidentCRUD"));
const AddMembers = loadable(() => import("./pages/AddMembers"));
const UserNav = loadable(() => import("./pages/UserNav"));
const UserEditDetails = loadable(() => import("./pages/UserEditDetails"));
const Search = loadable(() => import("./components/MarketPlace/Search"));
const Display = loadable(() => import("./components/MarketPlace/Display"));
const RegistrationOne = loadable(() => import("./pages/RegistrationOne"));
const RegistrationTwo = loadable(() => import("./pages/RegistrationTwo"));
const RegistrationThree = loadable(() => import("./pages/RegistrationThree"));
const ViewAnnouncements = loadable(() => import("./pages/ViewAnnouncements"));
const UserView = loadable(() => import("./pages/UserView"));
const UserID = loadable(() => import("./pages/UserID"));
const GetScholar = loadable(() => import("./pages/GetScholar"));
const Calendar = loadable(() => import("./components/CulturalEvents/Calendar"));
const CulturalEventsTable = loadable(() =>
  import("./components/CulturalEvents/CulturalEventsTable")
);
const CulturalEventsImages = loadable(() =>
  import("./components/CulturalEvents/CulturalEventsImages")
);

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
        path: "/awards",
        element: <Awards />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/trustee",
        element: <Trustee />,
      },
      {
        path: "/patron",
        element: <Patron />,
      },
      {
        path: "/lifemembers",
        element: <LifeMembers />,
      },
      {
        path: "/upload-donation-receipt",
        element: <UploadDonationReceipt />,
      },
      {
        path: "/payment-donation-success",
        element: <PaymentDonationSuccess />,
      },
      {
        path: "/getscholar",
        element: <GetScholar />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/cutural-events-table",
        element: <CulturalEventsTable />,
      },
      {
        path: "/cutural-events-images",
        element: <CulturalEventsImages />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/resetpsw",
        element: <ForgotPassword />,
      },
      {
        path: "/auth/otp-verify",
        element: <OtpVerify />,
      },
      {
        path: "/auth/new-password",
        element: <NewPassword />,
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
        path: "/president-animation-page",
        element: <PresidentAnimationNav />,
      },
      {
        path: "/edit-role-management",
        element: <EditRoleManagement />,
      },
      {
        path: "/admin-animation-page",
        element: <AdminAnimationNav />,
      },
      {
        path: "/admin-nav",
        element: <AdminNav />,
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
        path: "/user-edit-details",
        element: <UserEditDetails />,
      },
      {
        path: "/view-announcement",
        element: <ViewAnnouncements />,
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
