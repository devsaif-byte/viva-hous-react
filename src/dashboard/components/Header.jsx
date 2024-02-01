import { Avatar, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { HiSearch } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
export default function Header() {
  const { currUser, signOut, userType } = useContext(AuthContext);

  return (
    <Navbar fluid border>
      <Navbar.Brand>
        <NavLink to="/">
          <span className="self-center whitespace-nowrap text-2xl font-bold text-teal-500 dark:text-white">
            VivaHaus
          </span>
        </NavLink>
      </Navbar.Brand>
      {currUser ? (
        <div className="flex md:order-2">
          <Dropdown
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
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">{currUser?.email}</span>
            </Dropdown.Header>

            {userType?.role === 'admin' && (
              <NavLink to="makeAdmin">
                <Dropdown.Item as="li">Make someone admin</Dropdown.Item>
              </NavLink>
            )}
            <Dropdown.Item>Your Account</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={signOut}>Log out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : null}

      <TextInput placeholder="Search" className=" w-auto" icon={HiSearch} />
    </Navbar>
  );
}
