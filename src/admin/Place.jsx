import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

function PackagesAdmin() {
    const [packages, setPackages] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [newPackage, setNewPackage] = useState({
        packageName: "",
        description: "",
        onePersonPrice: "",
        duration: "",
        location: "",
        packageType: "",
        imageFile: null,
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchPackages = async () => {
        try {
            const response = await axios.get("http://localhost:8080/packages/getAllPackages");
            setPackages(response.data);
        } catch (error) {
            toast.error("Error fetching packages.");
            console.error(error);
        }
    };

    const validateForm = () => {
        const validationErrors = {};
        if (!newPackage.packageName.trim()) {
            validationErrors.packageName = "Package Name is required.";
        }
        if (!newPackage.description.trim()) {
            validationErrors.description = "Description is required.";
        }
        if (!newPackage.onePersonPrice || isNaN(newPackage.onePersonPrice) || newPackage.onePersonPrice <= 0) {
            validationErrors.onePersonPrice = "Price must be a positive number.";
        }
        if (!newPackage.duration || isNaN(newPackage.duration) || newPackage.duration <= 0) {
            validationErrors.duration = "Duration must be a positive number.";
        }
        if (!newPackage.location.trim()) {
            validationErrors.location = "Location is required.";
        }
        if (!newPackage.packageType.trim()) {
            validationErrors.packageType = "Package Type is required.";
        }
        return validationErrors;
    };

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            toast.error("Search query cannot be empty.");
            return;
        }
        try {
            const response = await axios.get(
                `http://localhost:8080/packages/searchPackage?name=${searchQuery}`
            );
            setPackages(response.data);
            toast.success("Search successful!");
        } catch (error) {
            toast.error("Error searching packages.");
            console.error(error);
        }
    };

    const handleAddOrUpdatePackage = async () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        const formData = new FormData();
        formData.append("package", JSON.stringify(newPackage));
        if (newPackage.imageFile) {
            formData.append("imageFile", newPackage.imageFile);
        }

        try {
            if (selectedPackage) {
                await axios.put(
                    `http://localhost:8080/packages/updatePackage/${selectedPackage.packageId}`,
                    formData
                );
                toast.success("Package updated successfully!");
            } else {
                await axios.post("http://localhost:8080/packages/addPackage", formData);
                toast.success("Package added successfully!");
            }
            fetchPackages();
            setNewPackage({
                packageName: "",
                description: "",
                onePersonPrice: "",
                duration: "",
                location: "",
                packageType: "",
                imageFile: null,
            });
            setSelectedPackage(null);
        } catch (error) {
            toast.error("Error adding/updating package.");
            console.error(error);
        }
    };

    const handleEdit = (pkg) => {
        setSelectedPackage(pkg);
        setNewPackage(pkg);
    };

    const handleDelete = async (packageId) => {
        try {
            await axios.delete(`http://localhost:8080/packages/deletePackage/${packageId}`);
            fetchPackages();
            toast.success("Package deleted successfully!");
        } catch (error) {
            toast.error("Error deleting package.");
            console.error(error);
        }
    };

    return (
        <div>
            <Sidebar />
                  <Nav/>
        <div className="container mt-4">
            <ToastContainer />
            <h1 className="text-center">Package Management</h1>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by package name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-primary mt-2" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <form className="mb-4">
                <h2>{selectedPackage ? "Edit Package" : "Add New Package"}</h2>
                <div className="form-group">
                    <label>Package Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={newPackage.packageName}
                        onChange={(e) =>
                            setNewPackage({ ...newPackage, packageName: e.target.value })
                        }
                    />
                    {errors.packageName && <small className="text-danger">{errors.packageName}</small>}
                </div>
                {/* Additional fields */}
                {/* ... */}
                <button
                    type="button"
                    className="btn btn-success mt-3"
                    onClick={handleAddOrUpdatePackage}
                >
                    {selectedPackage ? "Update Package" : "Add Package"}
                </button>
            </form>

            <h2>All Packages</h2>
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
                            <td>{pkg.duration} days</td>
                            <td>{pkg.location}</td>
                            <td>{pkg.packageType}</td>
                            <td>
                                <button
                                    className="btn btn-warning me-2"
                                    onClick={() => handleEdit(pkg)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(pkg.packageId)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default PackagesAdmin;
