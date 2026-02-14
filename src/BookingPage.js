import BookingForm from "./BookingForm";

function BookingPage() {
  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <p>
        Book your table at Little Lemon for an unforgettable dining experience!
      </p>
      <BookingForm />
    </div>
  );
}

export default BookingPage;
