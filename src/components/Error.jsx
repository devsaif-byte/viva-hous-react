import { Button } from 'flowbite-react';
import { Link, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="container mx-auto py-20">
      <h1 className="mb-3 font-semibold uppercase">Something went wrong 😢</h1>
      <p className="mb-3 font-semibold uppercase">{error.data || error.message}</p>

      <Link to={-1}>
        <Button outline className="rounded-none">
          &larr; Go back
        </Button>
      </Link>
    </div>
  );
}

export default Error;
