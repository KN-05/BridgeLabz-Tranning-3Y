// Q5: Movie Ticket Booking
const rules = {
  name: { regex: /^[A-Za-z ]+$/, message: "Name can only contain alphabets." },
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." },
  seats: { regex: /^([1-9]|10)$/, message: "Seats must be a number from 1 to 10." }, // 1-9 or 10
};

function validateField(id) {
  const input = document.getElementById(id);
  const error = document.getElementById(id + "Error");
  const ok = rules[id].regex.test(input.value.trim());
  input.className = ok ? "valid" : "invalid";
  error.textContent = ok ? "" : rules[id].message;
  return ok;
}

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const ticketBox = document.getElementById("ticket");
  const allValid = Object.keys(rules).map(validateField).every(Boolean);

  if (!allValid) {
    ticketBox.style.display = "none";
    return;
  }

  // store the booking in an object
  const booking = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    seats: Number(document.getElementById("seats").value),
  };

  ticketBox.style.display = "block";
  ticketBox.textContent =
    "Booking confirmed!\n\n" +
    `Name : ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
  console.log(booking);
});
