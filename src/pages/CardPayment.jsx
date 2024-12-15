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
  return (
    <div>
      <Topbar/>
      <Navbar/>
    </div>
  )
}
