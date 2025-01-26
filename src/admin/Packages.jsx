import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

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
    const [globalError, setGlobalError] = useState("");

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchPackages = async () => {
        try {
            const response = await axios.get("http://localhost:8080/packages/getAllPackages");
            setPackages(response.data);
        } catch (error) {
            console.error("Error fetching packages:", error);
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
            setGlobalError("Search query cannot be empty.");
            return;
        }
        setGlobalError("");
        try {
            const response = await axios.get(
                `http://localhost:8080/packages/searchPackage?name=${searchQuery}`
            );
            setPackages(response.data);
        } catch (error) {
            console.error("Error searching packages:", error);
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
            } else {
                await axios.post("http://localhost:8080/packages/addPackage", formData);
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
            console.error("Error adding/updating package:", error);
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
        } catch (error) {
            console.error("Error deleting package:", error);
        }
    };

    return (
        <div className="container mt-4">
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
                {globalError && <div className="text-danger mt-2">{globalError}</div>}
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

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        value={newPackage.description}
                        onChange={(e) =>
                            setNewPackage({ ...newPackage, description: e.target.value })
                        }
                    ></textarea>
                    {errors.description && (
                        <small className="text-danger">{errors.description}</small>
                    )}
                </div>

                <div className="form-group">
                    <label>Price per Person</label>
                    <input
                        type="number"
                        className="form-control"
                        value={newPackage.onePersonPrice}
                        onChange={(e) =>
                            setNewPackage({ ...newPackage, onePersonPrice: e.target.value })
                        }
                    />
                    {errors.onePersonPrice && (
                        <small className="text-danger">{errors.onePersonPrice}</small>
                    )}
                </div>

                <div className="form-group">
                    <label>Duration (Days)</label>
                    <input
                        type="number"
                        className="form-control"
                        value={newPackage.duration}
                        onChange={(e) =>
                            setNewPackage({ ...newPackage, duration: e.target.value })
                        }
                    />
                    {errors.duration && (
                        <small className="text-danger">{errors.duration}</small>
                    )}
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input
                        type="text"
                        className="form-control"
                        value={newPackage.location}
                        onChange={(e) =>
                            setNewPackage({ ...newPackage, location: e.target.value })
                        }
                    />
                    {errors.location && <small className="text-danger">{errors.location}</small>}
                </div>

                <div className="form-group">
                    <label>Package Type</label>
                    <input
                        type="text"
                        className="form-control"
                        value={newPackage.packageType}
                        onChange={(e) =>
                            setNewPackage({ ...newPackage, packageType: e.target.value })
                        }
                    />
                    {errors.packageType && <small className="text-danger">{errors.packageType}</small>}
                </div>

                <div className="form-group">
                    <label>Package Image</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) =>
                            setNewPackage({ ...newPackage, imageFile: e.target.files[0] })
                        }
                    />
                </div>

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
    );
}

export default PackagesAdmin;
