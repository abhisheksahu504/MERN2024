import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHeadset, FaHome } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

export const AdminLayout = () => {
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
