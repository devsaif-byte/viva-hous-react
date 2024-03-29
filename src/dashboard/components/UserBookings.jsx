import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Button, Checkbox, Modal, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../ui/Loader';

const baseURL = import.meta.env.VITE_BASE_URL;

export default function UserBookings() {
  const [openModal, setOpenModal] = useState(false);
  const [bookings, setBookings] = useState([]);

  function handleModal() {
    setOpenModal(true);
  }

  useEffect(() => {
    try {
      const getProperties = async () => {
        const response = await axios.get(`${baseURL}/user/booking`);
        setBookings(response.data);
      };
      getProperties();
    } catch (err) {
      console.error('Error fetching data:', err.message);
    }
  }, []);

  if (!bookings) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-auto">
      <h1 className="p-8 text-3xl">Bookings</h1>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Property Location</Table.HeadCell>
          <Table.HeadCell>Issue</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {bookings &&
            bookings.length &&
            bookings.map((book) => (
              <Table.Row key={book?.phone} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book?.propertyReference}
                </Table.Cell>
                <Table.Cell>{book?.name}</Table.Cell>
                <Table.Cell>{book?.address}</Table.Cell>
                <Table.Cell>{book?.email}</Table.Cell>
                <Table.Cell>{book?.phone}</Table.Cell>

                <Table.Cell>
                  <Button
                    color="failure"
                    onClick={() => handleModal()}
                    className="font-medium hover:underline dark:text-neutral-300"
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
