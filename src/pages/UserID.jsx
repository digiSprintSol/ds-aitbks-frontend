import { PDFViewer } from "@react-pdf/renderer";
import { useLocation } from "react-router-dom";
import UserIdCard from "./UserIdCard";

function UserID() {
  const location = useLocation();
  const data = `${location.state.data}`;
  return (
    <PDFViewer
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <UserIdCard data={data} />
    </PDFViewer>
  );
}

export default UserID;
