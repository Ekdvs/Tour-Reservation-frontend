import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Register from "./user/Register";
import SignIn from "./user/SignIn";
import ForgotPassword from './user/ForgotPassword';
import VerifyOTP from './user/VerifyOTP';
import ChangePassword from './user/ChangePassword';
import Profile from './user/Profile';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import EventShowPage from './pages/EventU';
import EventManagement from './admin/EventPage';
import CardPayment from './pages/CardPayment';
import Dashboard from './admin/Dashboard';
import Places from './admin/Place';
import AdminUserPage from './admin/AdminUserPage';

import AdminTravelGuidePage from './admin/AdminTravelGuidePage';
import LogOut from './user/LogOut';
import Cart from './pages/Cart';
import Destination from './pages/Destination';
import Testimonial from './pages/Testimonial';
import Explore_Tour from './pages/Explore_Tour';
import Travel_Guides from './pages/Travel_Guides';
import Our_Gallery from './pages/Our_Gallery';
import Blog from './pages/Blog';

import PlaceDetail from './pages/PlaceDetail';
import PackagesAdmin from './admin/Packages';
import AuroraEffect from './pages/AuroraEffect';
import BlogManagement from './admin/addBlog';
import Packages from './pages/Packages';
import BlogDetails from './pages/BlogDetails';
import Packageview from './pages/PackagePage';












function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/VerifyOTP" element={<VerifyOTP />} />
          <Route path="/PasswordChange" element={<ChangePassword />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/EventShowPage" element={<EventShowPage />} />
          <Route path="/CardPayment" element={<CardPayment />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/place" element={<Places />} />
          <Route path="/EventManagement" element={<EventManagement />} />
          <Route path="/manage" element={<AdminTravelGuidePage />} />
          <Route path="/addtravelguide" element={<AdminUserPage />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/payment" element={<CardPayment />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Explore_Tour" element={<Explore_Tour />} />
          <Route path="/Travel_Guides" element={<Travel_Guides />} />
          <Route path="/Our_Gallery" element={<Our_Gallery />} />
          <Route path="/Blog" element={<Blog />} />
          
          <Route path="/place-detail"read-more element={<PlaceDetail />} />
          <Route path="/addPackages"read-more element={<PackagesAdmin/>} />
          <Route path="/AuroraEffect"read-more element={<AuroraEffect/>} />
          <Route path="/addBlog" element={<BlogManagement/>} />
          <Route path="/Packages" element={<Packages/>} />
          <Route path="/blog-detail" element={<BlogDetails/>} />
          <Route path="/packagedeatail" element={<Packageview/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
