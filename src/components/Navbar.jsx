import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Avatar, Dropdown, Navbar, NavbarLink } from 'flowbite-react';

const Navigation = () => {
  return (
    <Navbar className="border-b shadow-none">
      <Navbar.Brand href="#">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" /> */}
        <span className="self-center whitespace-nowrap text-2xl font-bold text-teal-500 dark:text-white">VivaHous</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/">
          <Navbar.Link active>Home</Navbar.Link>
        </NavLink>
        <NavLink to="about">
          <Navbar.Link>About</Navbar.Link>
        </NavLink>
        <NavLink to="property">
          <Navbar.Link>Property</Navbar.Link>
        </NavLink>
        <NavLink to="contact">
          <Navbar.Link>Contact</Navbar.Link>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
