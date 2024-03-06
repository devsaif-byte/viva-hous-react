import { Sidebar } from 'flowbite-react';
import { useContext } from 'react';
import {
  HiArrowSmRight,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiOutlineDocumentReport,
  HiShoppingCart,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';

export default function SidebarComponent() {
  const { userType } = useContext(AuthContext);

  return (
    <Sidebar aria-label="Sidebar with logo branding example" className="col-span-2 h-[90svh] w-full border-r">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {userType?.admin === true && (
            <>
              <Sidebar.Item as="li" icon={HiOutlineDocumentReport}>
                Manage All Orders
              </Sidebar.Item>
              <Sidebar.Item as="li" icon={HiShoppingCart}>
                Add A Product
              </Sidebar.Item>
              <Sidebar.Item as="li" icon={HiShoppingBag}>
                Manage Products
              </Sidebar.Item>{' '}
            </>
          )}
          <Sidebar.Item as="li" icon={HiInbox}>
            Properties
          </Sidebar.Item>
          <Link to="myBookings">
            <Sidebar.Item as="li" icon={HiUser}>
              Bookings
            </Sidebar.Item>
          </Link>
          <Sidebar.Item as="li" icon={HiShoppingBag}>
            Payment
          </Sidebar.Item>

          <Sidebar.Item as="li" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item as="li" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
