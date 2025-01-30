import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PackageManagement = () => {
    const [packages, setPackages] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [packageForm, setPackageForm] = useState({
      packageName: "",
    packageType: "",
    description: "",
    onePersonPrice: "",
    duration: "",
    location: "",
    });
     const [packageImage, setPackageImage] = useState(null);
  const [editPackage, setEditPackage] = useState(null); // Store the package being edited