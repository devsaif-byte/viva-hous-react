import { Button, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');

  function handleBlur(e) {
    setEmail(e.target.value);
  }
  function handleChange(e) {
    setEmail(e.target.value);
  }
  const baseURL = import.meta.env.VITE_BASE_URL;
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // await axios.put(`http://localhost:3000/newRegisteredUser/${email}`, { email });
      await axios.put(`${baseURL}/newRegisteredUser/${email}`, { email });

      toast.success('User has been set to admin role!');
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message || 'Somethings wrong while set to admin');
    }
  }

  return (
    <section className="container mx-auto mt-20">
      <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Enter user's email " />
        </div>
        <TextInput
          id="email4"
          type="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={email}
          icon={HiMail}
          placeholder="name@user.com"
          required
        />
        <Button type="submit" className="mx-auto mt-6 rounded-none">
          Make Admin
        </Button>
      </form>
    </section>
  );
};

export default MakeAdmin;
