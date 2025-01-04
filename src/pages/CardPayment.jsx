import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

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
