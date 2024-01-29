import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signInUser } from '../authentication/firebase';

const defaultFormField = {
  email: '',
  password: '',
};
function Login() {
  const [fields, setFields] = useState(defaultFormField);
  const { email, password } = fields;

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const resetFormFields = () => setFields(defaultFormField);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userInfo = await signInUser(email, password);
      if (userInfo) {
        resetFormFields();
        // ...
      }
      navigate(from, { replace: true });
    } catch (err) {
      console.log('User sign in failed!', err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <section className="h-svh bg-neutral-50">
      <div className="container mx-auto p-20">
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4">
          <h1 className="mb-4 text-3xl font-bold text-teal-400">Login</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="name@yourmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" name="password" onChange={handleChange} type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button className="rounded-none" type="submit">
            Login / Sign in
          </Button>
          <small>
            Don't have account?{' '}
            <Link className="font-semibold hover:text-teal-400" to="/register">
              Sign Up
            </Link>
          </small>
        </form>
      </div>
    </section>
  );
}

export default Login;
