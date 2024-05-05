import React from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaHeadset, FaHome } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log(user);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <NavLink to="/admin/users">
                <li>
                  <FaUser />
                  users
                </li>
              </NavLink>
              <NavLink to="/admin/contacts">
                <li>
                  <FaHeadset />
                  contacts
                </li>
              </NavLink>
              <NavLink to="/service">
                <li>
                  <GrServices />
                  services
                </li>
              </NavLink>
              <NavLink to="/">
                <li>
                  <FaHome />
                  Home
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
