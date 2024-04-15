import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const AdminProtected = () => {
  const [isadmin, setIsadmin] = useState(false);

  const logindata = JSON.parse(localStorage.getItem("userexist"));
  console.log(logindata);
  const checkAdmin = () => {
    if (logindata.Name == "admin") {
      setIsadmin(true);
    } else {
      setIsadmin(false);
    }
  };

  useEffect(() => {
    checkAdmin();
  }, []);
  return <>{isadmin ? <Outlet /> : "you are not admin"}</>;
};

export default AdminProtected;
