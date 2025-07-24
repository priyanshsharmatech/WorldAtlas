import { Outlet } from "react-router-dom";
import  Footers  from "../UI/Footer";
import  Header  from "../UI/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footers />
    </>
  );
};

export default AppLayout