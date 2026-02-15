function ConfirmedBooking() {
  return (
    <main role="main" aria-label="Confirmation page">
      <section
        className="confirmed-booking"
        aria-labelledby="confirmation-heading"
      >
        <h1 id="confirmation-heading">
          <span aria-label="Checkmark">✓</span> Booking Confirmed!
        </h1>
        <p>Your reservation has been successfully confirmed.</p>
        <p>We look forward to serving you at Little Lemon!</p>
        <p>You will receive a confirmation email shortly.</p>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
