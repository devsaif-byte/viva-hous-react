import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { signOutUser } from '../authentication/firebase';
import { AuthContext } from '../contexts/authContext';

const Navigation = () => {
  const { currUser } = useContext(AuthContext);

  return (
    <Navbar className="border-b shadow-none">
      <Navbar.Brand href="#">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" /> */}
        <span className="self-center whitespace-nowrap text-2xl font-bold text-teal-500 dark:text-white">VivaHous</span>
      </Navbar.Brand>
      {currUser ? (
        <div className="flex md:order-2 ">
          <Dropdown
            className="rounded-none shadow-none"
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://i.pravatar.cc/300" rounded status="online">
                <div className="hidden space-y-1 font-medium dark:text-white md:grid">
                  <div>{currUser?.displayName || 'Username'}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Joined in{' '}
                    {new Date(currUser?.metadata?.creationTime).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                </div>
              </Avatar>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{currUser?.displayName || 'Username unavailable'}</span>
              <span className="block truncate text-sm font-medium">{currUser?.email}</span>
            </Dropdown.Header>
            <Link to="/dashboard">
              <Dropdown.Item as="li">Dashboard</Dropdown.Item>
            </Link>
            <Dropdown.Item as="li">Settings</Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item onClick={signOutUser}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : (
        <NavLink to="/login" className="flex md:order-2">
          <Button className="rounded-none">Sign In</Button>
        </NavLink>
      )}
      <Navbar.Collapse>
        <NavLink to="/">
          <Navbar.Link active>Home</Navbar.Link>
        </NavLink>
        <NavLink to="about">
          <Navbar.Link>About</Navbar.Link>
        </NavLink>
        <NavLink to="properties">
          <Navbar.Link>Properties</Navbar.Link>
        </NavLink>
        <NavLink to="contact">
          <Navbar.Link>Contact</Navbar.Link>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
