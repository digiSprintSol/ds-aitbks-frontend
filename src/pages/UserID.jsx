import { PDFViewer } from "@react-pdf/renderer";
import { useLocation } from "react-router-dom";
import UserIdCard from "./UserIdCard";

function UserID() {
  const location = useLocation();
  return (
    <PDFViewer
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <UserIdCard data={location.state} />
    </PDFViewer>
  );
}

export default UserID;
