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
    // Fetch all packages
  const fetchPackages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/packages/getAllPackages");
        setPackages(response.data);
        } catch (error) {
      toast.error("Error fetching packages!");
    }
  };
    useEffect(() => {
    fetchPackages();
    }, []);
    // Search Packages by Name
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/packages/searchPackages?name=${searchQuery}`
      );
        setPackages(response.data);
    } catch (error) {
      toast.error("Error searching packages!");
    }
  };
    // Add Package
  const handleAddPackage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
 formData.append("package", JSON.stringify(packageForm));
      formData.append("imageFile", packageImage);
      try {
      await axios.post("http://localhost:8080/packages/addPackage", formData);
      fetchPackages();
          toast.success("Package added successfully!");
          setPackageForm({
        packageName: "",
        packageType: "",
        description: "",
        onePersonPrice: "",
        duration: "",
        location: "",
      }); // Clear the form after adding a package
            setPackageImage(null); // Clear the image state
          } catch (error) {
      toast.error("Error adding package!");
    }
  };
    // Update Package
  const handleUpdatePackage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
      formData.append("package", JSON.stringify(packageForm));
      if (packageImage) formData.append("imageFile", packageImage);
      try {
      await axios.put(
        `http://localhost:8080/packages/updatePackage/${editPackage.id}`,
        formData
      );
           fetchPackages();
      toast.success("Package updated successfully!");
            setEditPackage(null); // Clear the editing state
          setPackageForm({
        packageName: "",
        packageType: "",
        description: "",
        onePersonPrice: "",
        duration: "",
        location: "",
          }); // Clear the form
           setPackageImage(null); // Clear the image state
    } catch (error) {
      toast.error("Error updating package!");
    }
  };