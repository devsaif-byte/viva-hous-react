import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../authentication/firebase';
import Loader from '../ui/Loader';
import toast from 'react-hot-toast';

const defaultFormFields = {
  email: '',
  password: '',
  repeatPassword: '',
};

function Register() {
  const [fields, setFields] = useState(defaultFormFields);
  const { email, password, repeatPassword } = fields;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const resetFormFields = () => setFields(defaultFormFields);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit clicked');
    // Validate that passwords match before proceeding.
    if (password !== repeatPassword) {
      alert(`password didn't match!`);
      console.log(`password didn't match!`);
      return;
    }
    try {
      const userInfo = createUser(email, password);
      if (userInfo) {
        resetFormFields();
        // ...
        navigate('/');
        toast.success('User created successfully!', { duration: 4000 });
      }
    } catch (err) {
      console.log('User sign up failed!', err.message);
      if (err.code === 'auth/email-already-in-use') {
        toast.error('User already exist');
      } else {
        toast.error('Error occurred while creating user');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  if (isLoading) return <Loader />;

  return (
    <section className="h-svh bg-neutral-50">
      <div className="container mx-auto p-20">
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4">
          <h1 className="mb-4 text-3xl font-bold text-teal-400">Register/Sign Up Your account</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="name@yourmail.com"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              value={password}
              onChange={handleChange}
              name="password"
              type="password"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              id="repeat-password"
              value={repeatPassword}
              onChange={handleChange}
              name="repeatPassword"
              type="password"
              required
              shadow
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button className="rounded-none" type="submit">
            Register new account
          </Button>
          <small>
            Already have an account?{' '}
            <Link className="font-semibold hover:text-teal-400" to="/login">
              Sign In
            </Link>
          </small>
        </form>
      </div>
    </section>
  );
}

export default Register;
