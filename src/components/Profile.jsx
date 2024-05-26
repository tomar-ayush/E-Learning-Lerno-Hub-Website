import React from "react";
import img1 from "../assets/images/pic1.png";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function Profile() {
  const { login, register, isAuthenticated, logout, user } = useKindeAuth();

  return (
    
    <div className="flex items-center h-display gap-50 mb-80 mt-12">
      <div className="text-red-400 border ml-20 my-20 p-2 rounde-xl">
        <img src={img1} />
      </div>
      <div>
        <p>Name: {user.given_name} </p>
        <p>Email: {user.email} </p>
      </div>
    </div>
  );
}

export default Profile;
