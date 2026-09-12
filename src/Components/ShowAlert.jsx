// utils/showBookingConfirmation.js
import Swal from "sweetalert2";
import "animate.css";

const ShowAlert = (text) => {
  return Swal.fire({
    title: "🎉 Booking Confirmed!",
    text:
      text ||
      "Thank you for choosing Canex Cleaning.\nWe’ll be at your service shortly!",
    icon: "success",
    confirmButtonText: "Awesome!",
    background: "#f0f9ff",
    color: "#0c4a6e",
    confirmButtonColor: "#0284c7", 
    imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    imageWidth: 80,
    imageHeight: 80,
    imageAlt: "Cleaning Icon",
    showClass: {
      popup: "animate__animated animate__fadeInDown animate__faster",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animate__faster",
    },
  });
};

export default ShowAlert;
