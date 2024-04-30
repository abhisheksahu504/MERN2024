import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <NavLink to="/admin/users">
                <li>users</li>
              </NavLink>
              <NavLink to="/admin/contacts">
                <li>contacts</li>
              </NavLink>
              <NavLink>
                <li>services</li>
              </NavLink>
              <NavLink>
                <li>Home</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
