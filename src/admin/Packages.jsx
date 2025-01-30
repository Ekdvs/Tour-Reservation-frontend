import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PackageManagement = () => {
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({
    packageName: "",
    packageType: "",
    description: "",
    onePersonPrice: "",
    duration: "",
    location: "",
    imageFile: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [editingPackageId, setEditingPackageId] = useState(null);
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/packages/getAllPackages");
      setPackages(response.data);
    } catch (error) {
      toast.error("Failed to fetch packages.");
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!newPackage.packageName) validationErrors.packageName = "Package name is required.";
    if (!newPackage.packageType) validationErrors.packageType = "Package type is required.";
    if (!newPackage.description) validationErrors.description = "Description is required.";
    if (!newPackage.onePersonPrice) validationErrors.onePersonPrice = "Price is required.";
    if (!newPackage.duration) validationErrors.duration = "Duration is required.";
    if (!newPackage.location) validationErrors.location = "Location is required.";
    return validationErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPackage((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewPackage((prev) => ({ ...prev, imageFile: file }));
    setImagePreview(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setNewPackage({
      packageName: "",
      packageType: "",
      description: "",
      onePersonPrice: "",
      duration: "",
      location: "",
      imageFile: null,
    });
    setImagePreview(null);
    setEditingPackageId(null);
    setErrors({});
  };

  const handleAddPackage = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    const { imageFile, ...packageData } = newPackage;
    formData.append("package", JSON.stringify(packageData));
    if (imageFile) formData.append("imageFile", imageFile);

    try {
      await axios.post("http://localhost:8080/packages/addPackage", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Package added successfully!");
      fetchPackages();
      resetForm();
    } catch (error) {
      toast.error("Failed to add package.");
    }
  };

  const handleEditPackage = (packageData) => {
    setNewPackage(packageData);
    setEditingPackageId(packageData.id);
    setImagePreview(packageData.imageUrl); // Assuming the backend provides an image URL
    toast.info("Editing package: " + packageData.packageName);
  };

  const handleUpdatePackage = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    const { imageFile, ...packageData } = newPackage;
    formData.append("package", JSON.stringify(packageData));
    if (imageFile) formData.append("imageFile", imageFile);

    try {
      await axios.put(`http://localhost:8080/packages/updatePackage/${editingPackageId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Package updated successfully!");
      fetchPackages();
      resetForm();
    } catch (error) {
      toast.error("Failed to update package.");
    }
  };

  const handleDeletePackage = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/packages/deletePackage/${id}`);
      toast.success("Package deleted successfully!");
      fetchPackages();
    } catch (error) {
      toast.error("Failed to delete package.");
    }
  };

  const filteredPackages = packages.filter((pkg) =>
    pkg.packageName.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2>Package Management</h2>

      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Package Name</label>
        <input
          type="text"
          className={`form-control ${errors.packageName ? "is-invalid" : ""}`}
          name="packageName"
          value={newPackage.packageName}
          onChange={handleInputChange}
        />
        <div className="invalid-feedback">{errors.packageName}</div>
      </div>

      <div className="form-group">
        <label>Package Type</label>
        <input
          type="text"
          className={`form-control ${errors.packageType ? "is-invalid" : ""}`}
          name="packageType"
          value={newPackage.packageType}
          onChange={handleInputChange}
        />
        <div className="invalid-feedback">{errors.packageType}</div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          className={`form-control ${errors.description ? "is-invalid" : ""}`}
          name="description"
          value={newPackage.description}
          onChange={handleInputChange}
        ></textarea>
        <div className="invalid-feedback">{errors.description}</div>
      </div>

      <div className="form-group">
        <label>One Person Price</label>
        <input
          type="number"
          className={`form-control ${errors.onePersonPrice ? "is-invalid" : ""}`}
          name="onePersonPrice"
          value={newPackage.onePersonPrice}
          onChange={handleInputChange}
        />
        <div className="invalid-feedback">{errors.onePersonPrice}</div>
      </div>

      <div className="form-group">
        <label>Duration</label>
        <input
          type="text"
          className={`form-control ${errors.duration ? "is-invalid" : ""}`}
          name="duration"
          value={newPackage.duration}
          onChange={handleInputChange}
        />
        <div className="invalid-feedback">{errors.duration}</div>
      </div>

      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          className={`form-control ${errors.location ? "is-invalid" : ""}`}
          name="location"
          value={newPackage.location}
          onChange={handleInputChange}
        />
        <div className="invalid-feedback">{errors.location}</div>
      </div>

      <div className="form-group">
        <label>Package Image</label>
        <input
          type="file"
          className="form-control"
          onChange={handleFileChange}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-3"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        )}
      </div>

      <button
  className="btn btn-success mt-3"
  onClick={editingPackageId ? handleUpdatePackage : handleAddPackage}
>
  {editingPackageId ? "Update Package" : "Add Package"}
</button>
{editingPackageId && (
  <button
    className="btn btn-secondary mt-3 ml-2"
    onClick={() => {
      resetForm();
      toast.info("Editing canceled.");
    }}
  >
    Cancel
  </button>
)}

      

      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPackages.map((pkg) => (
            <tr key={pkg.id}>
              <td>{pkg.packageName}</td>
              <td>{pkg.packageType}</td>
              <td>{pkg.description}</td>
              <td>{pkg.onePersonPrice}</td>
              <td>{pkg.duration}</td>
              <td>{pkg.location}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={() => handleEditPackage(pkg)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeletePackage(pkg.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageManagement;
