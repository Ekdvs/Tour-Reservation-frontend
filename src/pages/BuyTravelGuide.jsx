import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle, FaArrowLeft, FaCalendarAlt, FaMoneyBillWave, FaUser, FaClock } from "react-icons/fa";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";


const BuyTravelGuide = () => {
  const [guideList, setGuideList] = useState([]); 
  const [purchaseStatus, setPurchaseStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const navigate = useNavigate();
  const price = 1000;

  useEffect(() => {
    const fetchAllGuides = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://online-travel-planning-production.up.railway.app/user/travel-guides");
        setGuideList(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching travel guides:", error);
        setError("Unable to load travel guides. Please try again later.");
        setLoading(false);
      }
    };

    fetchAllGuides();
  }, []);

  const handleBuyGuide = async (guide) => {
    setSelectedGuide(guide);
    const userId = localStorage.getItem("userId");
    const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
      setPurchaseStatus("login_required");
      return;
    }

    const eventId = guide.id || "defaultEventId"; 

    const reservationData = {
      userEmail: userEmail,
      eventId: eventId,
      numOfPerson: 1,
      totalCharge: price,
      travelGuideId: guide.id,
      perPersonCharge: price,
    };

    try {
      setPurchaseStatus("processing");
      const reservationResponse = await axios.post(
        "https://online-travel-planning-production.up.railway.app/reservation/create", 
        reservationData
      );

      if (reservationResponse.data) {
        localStorage.setItem("totalPrice", price);
        localStorage.setItem("guideName", guide.firstName || "Travel Guide");
        localStorage.setItem("packageName", guide.packageName || "Travel Package");
        setPurchaseStatus("success");
        
        // Navigate after a short delay to show success message
        setTimeout(() => {
          navigate("/payment");
        }, 1500);
      }
    } catch (error) {
      console.error("Error creating reservation:", error);
      setPurchaseStatus("failure");
    }
  };

  const handleBackToPackages = () => {
    navigate("/packages");
  };

  return (
    <div className="travel-guide-page">
      <Topbar />
      <Navbar />
      
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3 className="text-white display-3 mb-4">Blogs</h3>
          
          <a href="/packagedeatail" className="text-white"><button className="btn btn-outline-light btn-lg" >
            <FaArrowLeft className="me-2" /> View Travel Packages
          </button></a>
          
        </div>
      </div>

      <div className="container my-5">
        <div className="row mb-4">
          <div className="col-md-8 mx-auto text-center">
            <h2 className="mb-3">Meet Our Expert Guides</h2>
            <p className="text-muted">Our certified travel guides are passionate about creating memorable experiences tailored to your preferences.</p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading travel guides...</p>
          </div>
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : guideList.length === 0 ? (
          <div className="alert alert-info text-center" role="alert">
            No travel guides available at the moment. Please check back later.
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {guideList.map((guide) => (
              <div key={guide.id} className="col">
                <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                  <div className="position-relative">
                    {guide.imageData ? (
                      <img
                        src={`data:${guide.contentType};base64,${guide.imageData}`}
                        className="card-img-top"
                        alt={guide.packageName}
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                    ) : (
                      <div className="bg-light text-center py-5">
                        <FaUser size={80} className="text-secondary" />
                      </div>
                    )}
                    <div className="position-absolute bottom-0 start-0 bg-primary text-white px-3 py-2">
                      <strong>${price}</strong>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{guide.firstName || "Expert Guide"}</h5>
                    <h6 className="card-subtitle mb-2 text-primary">{guide.packageName || "Travel Package"}</h6>
                    
                    <div className="my-3">
                      <p className="card-text">{guide.description || "Experienced travel guide ready to enhance your journey with local knowledge and personalized recommendations."}</p>
                    </div>
                    
                    <div className="d-flex mb-3 text-muted">
                      <div className="me-3">
                        <FaClock className="me-1" />
                        <small>{guide.duration || "7"} Days</small>
                      </div>
                      <div>
                        <FaCalendarAlt className="me-1" />
                        <small>Available Now</small>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-white border-0 pt-0">
                    <button 
                      className="btn btn-primary w-100 py-2" 
                      onClick={() => handleBuyGuide(guide)}
                      disabled={purchaseStatus === "processing" && selectedGuide?.id === guide.id}
                    >
                      {purchaseStatus === "processing" && selectedGuide?.id === guide.id ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Processing...
                        </>
                      ) : (
                        <>
                          <FaMoneyBillWave className="me-2" /> Reserve This Guide
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Purchase Status Messages */}
        {purchaseStatus && (
          <div className={`alert mt-4 ${
            purchaseStatus === "success" ? "alert-success" : 
            purchaseStatus === "login_required" ? "alert-warning" : 
            purchaseStatus === "processing" ? "alert-info" : 
            "alert-danger"
          }`} role="alert">
            {purchaseStatus === "success" && (
              <div className="d-flex align-items-center">
                <FaCheckCircle className="me-2" size={20} /> 
                <div>
                  <strong>Reservation Successful!</strong>
                  <p className="mb-0">Redirecting you to payment page...</p>
                </div>
              </div>
            )}
            {purchaseStatus === "failure" && (
              <div className="d-flex align-items-center">
                <FaTimesCircle className="me-2" size={20} /> 
                <div>
                  <strong>Reservation Failed</strong>
                  <p className="mb-0">There was an error processing your reservation. Please try again.</p>
                </div>
              </div>
            )}
            {purchaseStatus === "login_required" && (
              <div className="d-flex align-items-center">
                <FaTimesCircle className="me-2" size={20} /> 
                <div>
                  <strong>Login Required</strong>
                  <p className="mb-0">Please <a href="/login" className="alert-link">login</a> to make a reservation.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Why Choose Our Guides Section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="mb-3">Why Choose Our Guides</h2>
              <p className="text-muted">Experience the difference with our professional travel guides</p>
            </div>
          </div>
          
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                    <i className="fas fa-map-marked-alt fa-2x"></i>
                  </div>
                  <h5 className="card-title">Local Expertise</h5>
                  <p className="card-text">Our guides have extensive knowledge of local culture, history, and hidden gems.</p>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                    <i className="fas fa-language fa-2x"></i>
                  </div>
                  <h5 className="card-title">Personalized Service</h5>
                  <p className="card-text">Customized itineraries based on your interests and preferences.</p>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                    <i className="fas fa-shield-alt fa-2x"></i>
                  </div>
                  <h5 className="card-title">Safety & Support</h5>
                  <p className="card-text">24/7 assistance and safety measures throughout your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyTravelGuide;