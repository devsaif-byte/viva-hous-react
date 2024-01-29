const BookingSuccess = () => {
  return (
    <section>
      <div className="container mx-auto h-svh px-4 py-20 text-center md:px-0">
        <h1 className=" mb-10 text-2xl font-semibold text-teal-400 md:text-4xl">
          Your successfully booked a property!
        </h1>
        <p className="mb-10">We will contact you soon..</p>
        <div className="relative mx-auto h-40 w-1/4 p-0">
          <iframe
            src="https://giphy.com/embed/8m4R4pvViWtRzbloJ1"
            width="100%"
            height="100%"
            frameBorder="0"
            className="giphy-embed absolute"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BookingSuccess;
