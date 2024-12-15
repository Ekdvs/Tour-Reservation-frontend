import React from 'react'
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CardPayment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
  };
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Online Payment</h3>
    </div>
  )
}
