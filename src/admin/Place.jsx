import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [placeName, setPlaceName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null); // Store the image file
  const [category, setCategory] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [editingPlace, setEditingPlace] = useState(null);
  const [isAddingPlace, setIsAddingPlace] = useState(false);
  const [expandedDescription, setExpandedDescription] = useState({});
  const API_BASE_URL = "https://online-travel-planning-production.up.railway.app/place";

  // Fetch all places
  const fetchPlaces = async () => {
    try {
      const response = await axios.get("https://online-travel-planning-production.up.railway.app/place/allplaces");
      setPlaces(response.data);
      setFilteredPlaces(response.data);
    } catch (error) {
      toast.error("Error fetching places!");
    }
  };
  const toggleDescription = (placeName) => {
    setExpandedDescription((prevState) => ({
      ...prevState,
      [placeName]: !prevState[placeName],
    }));
  };
  useEffect(() => {
    fetchPlaces();
  }, []);

  // Handle form submission for adding/updating a place
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlace = { placeName, description, location, category,};

    // If an image was selected, append it to the form data
    const formData = new FormData();
    formData.append("placeName", placeName);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("category", category);
    
    if (image) formData.append("image", image);

    try {
      if (editingPlace) {
        await axios.put(
          `${API_BASE_URL}/update/${editingPlace.placeName}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        toast.success("Place updated successfully!");
      } else if (isAddingPlace) {
        await axios.post(`${API_BASE_URL}/addplace`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Place added successfully!");
      }
      fetchPlaces();
      resetForm();
    } catch (error) {
      toast.error("Error adding/updating place!");
    }
  };

  // Handle delete place
  const handleDelete = async (name) => {
    try {
      await axios.delete(`${API_BASE_URL}/delete/${name}`);
      toast.success("Place deleted successfully!");
      fetchPlaces();
    } catch (error) {
      toast.error("Error deleting place!");
    }
  };

  // Reset form fields
  const resetForm = () => {
    setPlaceName("");
    setDescription("");
    setLocation("");
    setImage(null); // Reset the image field
    setCategory("");
    
    setEditingPlace(null);
    setIsAddingPlace(false);
  };

  // Handle search button click
  const handleSearch = async () => {
    if (searchTerm === "") {
      setFilteredPlaces(places);
    } else {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/getPlaceByName/${searchTerm}`
        );
        setFilteredPlaces([response.data]);
      } catch (error) {
        toast.error("Error searching for place!");
      }
    }
  };

  // Load details of a place into the form for editing
  const handleEdit = (place) => {
    setPlaceName(place.placeName);
    setDescription(place.description);
    setLocation(place.location);
    setImage(null); // Reset the image in case it's being edited
    setCategory(place.category);
    
    setEditingPlace(place);
    setIsAddingPlace(false);
  };

  // Handle adding a new place
  const handleAddPlace = () => {
    resetForm();
    setIsAddingPlace(true);
  };

  return (
    <div>
      <Sidebar />
      <Nav />

      <div className="container mt-5">
        <h1 className="text-center mb-4">Place Management</h1>
        <ToastContainer />
        <h3>
          {editingPlace
            ? "Edit Travel Place"
            : isAddingPlace
            ? "Add New Place"
            : "All Travel Places"}
        </h3>

        {/* Form for adding/updating a place */}
        {(editingPlace || isAddingPlace) && (
          <form
            onSubmit={handleSubmit}
            className="mt-4"
            encType="multipart/form-data"
          >
            <div className="mb-3">
              <label htmlFor="placeName" className="form-label">
                Place Name
              </label>
              <input
                type="text"
                className="form-control"
                id="placeName"
                value={placeName}
                onChange={(e) => setPlaceName(e.target.value)}
                required
                disabled={!!editingPlace}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="mt-3"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>

            
            <button type="submit" className="btn btn-primary">
              {editingPlace ? "Update Place" : "Add Place"}
            </button>
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={resetForm}
            >
              Cancel
            </button>
          </form>
        )}

        {/* Add Place Button */}
        {!editingPlace && !isAddingPlace && (
          <button onClick={handleAddPlace} className="btn btn-success mb-3">
            Add Place
          </button>
        )}

        {/* Search Input and Button */}
        <div className="mt-3 mb-3">
          <label htmlFor="search" className="form-label">
            Search by Place Name
          </label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Enter place name to search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary ms-2" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        <table className="table mt-3">
          <thead>
            <tr>
              <th>Place Name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlaces.map((place) => (
              <tr key={place.placeName}>
                <td>{place.placeName}</td>
                <td>
                  {expandedDescription[place.placeName] ? (
                    <>
                      {place.description}{" "}
                      <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={() => toggleDescription(place.placeName)}
                      >
                        Read Less
                      </button>
                    </>
                  ) : (
                    <>
                      {place.description.substring(0, 100)}...{" "}
                      <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={() => toggleDescription(place.placeName)}
                      >
                        Read More
                      </button>
                    </>
                  )}
                </td>
                <td>{place.location}</td>
                <td>{place.category}</td>

                <td>
                  <div className="d-flex">
                    <button
                      onClick={() => handleEdit(place)}
                      className="btn btn-warning me-2 w-100"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(place.placeName)}
                      className="btn btn-danger w-100"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Places;
