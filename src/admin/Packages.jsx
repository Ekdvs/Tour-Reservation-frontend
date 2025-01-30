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
    description: "",
    onePersonPrice: "",
    duration: "",
    location: "",
    packageType: "",
  });
  const [packageImage, setPackageImage] = useState(null);
  const [editPackage, setEditPackage] = useState(null);

  const packageTypes = ["Luxury", "Budget", "Adventure", "Family", "Honeymoon"];

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

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/packages/searchPackage?name=${searchQuery}`);
      setPackages(response.data);
    } catch (error) {
      toast.error("Error searching packages!");
    }
  };

  const handleAddOrUpdatePackage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("package", JSON.stringify(packageForm));
    if (packageImage) formData.append("imageFile", packageImage);

    try {
      if (editPackage) {
        await axios.put(`http://localhost:8080/packages/updatePackage/${editPackage.packageId}`, formData);
        toast.success("Package updated successfully!");
      } else {
        await axios.post("http://localhost:8080/packages/addPackage", formData);
        toast.success("Package added successfully!");
      }
      fetchPackages();
      setEditPackage(null);
      setPackageForm({
        packageName: "",
        description: "",
        onePersonPrice: "",
        duration: "",
        location: "",
        packageType: "",
      });
    } catch (error) {
      toast.error("Error adding/updating package!");
    }
  };

  const handleDeletePackage = async (packageId) => {
    try {
      await axios.delete(`http://localhost:8080/packages/deletePackage/${packageId}`);
      fetchPackages();
      toast.success("Package deleted successfully!");
    } catch (error) {
      toast.error("Error deleting package!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPackageForm({ ...packageForm, [name]: value });
  };

  const handleEditPackage = (pkg) => {
    setEditPackage(pkg);
    setPackageForm({
      packageName: pkg.packageName,
      description: pkg.description,
      onePersonPrice: pkg.onePersonPrice,
      duration: pkg.duration,
      location: pkg.location,
      packageType: pkg.packageType,
    });
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Package Management</h1>
      <ToastContainer />

      <div className="mb-4">
        <input type="text" className="form-control mb-2" placeholder="Search by package name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button className="btn btn-primary w-100" onClick={handleSearch}>Search</button>
      </div>

      <form onSubmit={handleAddOrUpdatePackage} className="border p-4 rounded mb-4">
        <h2>{editPackage ? "Edit Package" : "Add Package"}</h2>
        <input type="text" className="form-control mb-2" name="packageName" placeholder="Package Name" value={packageForm.packageName} onChange={handleInputChange} required />
        <textarea className="form-control mb-2" name="description" placeholder="Description" value={packageForm.description} onChange={handleInputChange} required></textarea>
        <input type="number" className="form-control mb-2" name="onePersonPrice" placeholder="Price Per Person" value={packageForm.onePersonPrice} onChange={handleInputChange} required />
        <input type="number" className="form-control mb-2" name="duration" placeholder="Duration (Days)" value={packageForm.duration} onChange={handleInputChange} required />
        <input type="text" className="form-control mb-2" name="location" placeholder="Location" value={packageForm.location} onChange={handleInputChange} required />
        <select className="form-control mb-2" name="packageType" value={packageForm.packageType} onChange={handleInputChange} required>
          <option value="">Select Package Type</option>
          {packageTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <input type="file" className="form-control mb-2" onChange={(e) => setPackageImage(e.target.files[0])} />
        <button type="submit" className="btn btn-success w-100">{editPackage ? "Update Package" : "Add Package"}</button>
      </form>

      <h2 className="mt-4">Package List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Location</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.packageId}>
              <td>{pkg.packageName}</td>
              <td>{pkg.description}</td>
              <td>{pkg.onePersonPrice}</td>
              <td>{pkg.duration} Days</td>
              <td>{pkg.location}</td>
              <td>{pkg.packageType}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEditPackage(pkg)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDeletePackage(pkg.packageId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageManagement;