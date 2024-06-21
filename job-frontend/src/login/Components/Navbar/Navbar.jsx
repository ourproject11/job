import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu } from '@headlessui/react';

const Navbar1 = () => {
  return (
    <nav className="bg-dark text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Rozgar.com
        </Link>
        <div className="flex items-center space-x-4">
          <NavLink
            exact
            to="/user"
            className="text-white hover:text-blue-400"
            activeClassName="text-blue-400"
          >
            Users
          </NavLink>
          <NavLink
            exact
            to="/manageJobs"
            className="text-white hover:text-blue-400"
            activeClassName="text-blue-400"
          >
            Jobs
          </NavLink>
          <NavLink
            exact
            to="/Report"
            className="text-white hover:text-blue-400"
            activeClassName="text-blue-400"
          >
            Reports
          </NavLink>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="text-white">
              Admin Name
            </Menu.Button>
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#action/3.4"
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-black'
                    } group flex items-center px-4 py-2 text-sm`}
                  >
                    Change Password
                  </a>
                )}
              </Menu.Item>
              <div className="border-t border-gray-200"></div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-black'
                    } group flex items-center px-4 py-2 text-sm w-full text-left`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
