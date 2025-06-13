// utils/showBookingConfirmation.js
import Swal from "sweetalert2";
import "animate.css";

const ShowAlert = () => {
  Swal.fire({
    title: "🎉 Booking Confirmed!",
    text: "Thank you for choosing Canex Cleaning.\nWe’ll be at your service shortly!",
    icon: "success",
    confirmButtonText: "Awesome!",
    background: "#e0f2fe", 
    color: "#0c4a6e", 
    confirmButtonColor: "#2563eb", 
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
