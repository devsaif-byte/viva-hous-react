import { Button, Label, TextInput } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/authContext';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Checkout = () => {
  const { currUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    birthDate: '',
    address: '',
  });

  const baseURL = import.meta.env.VITE_BASE_URL;
  const location = useLocation();
  const [propertyData] = useState(location.state.propertyData || {});
  useEffect(() => {}, [propertyData]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Set a property reference using location to FormData object
      formDataToSend.append('propertyReference', propertyData.location);

      // Set a custom message
      formDataToSend.append('message', 'This user submitted a booking request for the property of this location.');

      formDataToSend.append('name', formData.name);

      const formDataObject = {};
      formDataToSend.forEach((value, key) => {
        formDataObject[key] = value;
      });
      const response = await axios.post(`${baseURL}/user/booking`, formDataObject, {
        'Content-Type': 'multipart/form-data',
      });
      console.log('FormData to send:', formDataObject);

      setFormData({
        name: '',
        phone: '',
        email: '',
        birthDate: '',
        address: '',
      });

      if (!response.data || response.statusText !== 'OK') {
        toast.error('Error submitting form. Please try again with unique data.');
        console.log(`${response.status}, ${response.statusText}`.code);
        return;
      }
      toast.success('Booking successful!');
      navigate('/bookingSuccess');
      console.log(response.statusText);
    } catch (err) {
      toast.error('Error submitting form. Please try again.');
      console.error('Error submitting form:', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-neutral-50">
      <div className="container mx-auto h-svh py-20">
        <div className="grid-col mb-6 grid gap-4 font-semibold uppercase text-stone-400">
          <h2 className="">Name: {currUser.displayName || 'username'}</h2>
          <h3>User: {currUser.email || 'user-email'}</h3>
          <h3 className="italic">ID: {currUser.uid}</h3>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Phone Number" />
            </div>
            <TextInput
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              id="phone"
              type="number"
              placeholder="Your Phone number"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="Type your email"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="birthDate" value="Birth-date" />
            </div>
            <TextInput name="birthDate" value={formData.birthDate} onChange={handleChange} id="birthDate" type="date" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Full Address" />
            </div>
            <TextInput
              name="address"
              value={formData.address}
              onChange={handleChange}
              id="address"
              type="text"
              placeholder="E.g. Galactic Quadrant ZR-9, Celestial Nexus 7B, Exoplanet Zephyrion Prime"
              required
            />
          </div>

          <Button className="rounded-none" type="submit" disabled={loading}>
            Book Now
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
