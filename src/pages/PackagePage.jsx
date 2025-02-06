import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

const PackageView = () => {
  const [packageDetails, setPackageDetails] = useState(null);
  const [packageId, setPackageId] = useState(localStorage.getItem("selectedPackageId"));
  const [numOfTickets, setNumOfTickets] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackageDetails = async () => {
      if (!packageId) return;

      try {
        const response = await axios.get(`https://online-travel-planning-production.up.railway.app/packages/getPackageById/${packageId}`);
        setPackageDetails(response.data);
        setTotalPrice(response.data.onePersonPrice);
      } catch (error) {
        toast.error("Error fetching package details:");
        console.error("Error fetching package details:", error);
      }
    };

    fetchPackageDetails();
  }, [packageId]);

  const incrementTickets = () => {
    setNumOfTickets((prev) => prev + 1);
    setTotalPrice((prev) => prev + packageDetails.onePersonPrice);
  };

  const decrementTickets = () => {
    if (numOfTickets > 1) {
      setNumOfTickets((prev) => prev - 1);
      setTotalPrice((prev) => prev - packageDetails.onePersonPrice);
    }
  };

  const handleConfirmBooking = async () => {
    const userEmail = localStorage.getItem("userEmail");

     if (!userEmail) {
          toast.error("User is not logged in!");
          
          navigate("/login");
          return;
        }

    const reservationData = {
      userEmail: userEmail,
      totalPrice: totalPrice,
      packageId: packageId,
      numberOfPeople: numOfTickets
    };

    try {
      const response = await axios.post("https://online-travel-planning-production.up.railway.app/reservation/create", reservationData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.data && response.data.reservationId) {
        localStorage.setItem("reservationId", response.data.reservationId);
        localStorage.setItem("totalPrice",totalPrice) // Save reservationId in localStorage
        console.log("Reservation ID saved:", response.data.reservationId);
      } else {
        toast.warn("No reservationId received in response");
        console.warn("No reservationId received in response");
      }
      setShowConfirmation(true); // Show the travel guide confirmation after booking
    } catch (error) {
      console.error("Error creating reservation:", error);
     toast.error("Booking failed. Please try again.");
    }
  };

  const handleYes = () => navigate("/travel-guide-booking");
  const handleNo = () => navigate("/payment");

  return (

    <div>
      <Topbar/>
      <Navbar/>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Explore Our Travel Packages</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Services">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Services</li>
          </ol>
        </div>
      </div>

    <div className="container mt-5">
      <h1 className="text-center">Package Details</h1>
      {packageDetails ? (
        <div className="card shadow-lg">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={`data:${packageDetails.contentType};base64,${packageDetails.imageData}`}
                className="img-fluid rounded-start"
                alt={packageDetails.packageName}
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{packageDetails.packageName}</h5>
                <p>{packageDetails.description}</p>
                <p><strong>Location:</strong> {packageDetails.location}</p>
                <p><strong>Price per Person:</strong> ${packageDetails.onePersonPrice}</p>

                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-primary me-2" onClick={decrementTickets}><FaMinus /></button>
                  <input type="number" className="form-control text-center" value={numOfTickets} readOnly style={{ width: "80px" }} />
                  <button className="btn btn-outline-primary ms-2" onClick={incrementTickets}><FaPlus /></button>
                </div>

                <h5 className="mt-3">Total Price: ${totalPrice.toFixed(2)}</h5>

                <button className="btn btn-primary mt-3" onClick={handleConfirmBooking}>Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>
      ) : <p>Loading package details...</p>}

      {/* Travel Guide Confirmation */}
      {showConfirmation && (
        <div className="alert alert-info mt-4 text-center">
          <p className="mb-3">Do you want to buy a travel guide?</p>
          <button className="btn btn-success me-2" onClick={handleYes}>Yes</button>
          <button className="btn btn-danger" onClick={handleNo}>No</button>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default PackageView;
