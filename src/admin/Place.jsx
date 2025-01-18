import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [placeName, setPlaceName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [editingPlace, setEditingPlace] = useState(null);
    const [isAddingPlace, setIsAddingPlace] = useState(false);

    const API_BASE_URL = 'http://localhost:8080/place';

    useEffect(() => {
        fetchPlaces();
    }, []);

    const fetchPlaces = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/allplaces`);
            setPlaces(response.data);
            setFilteredPlaces(response.data);
        } catch (error) {
            toast.error('Error fetching places!');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('place', JSON.stringify({ placeName, description, location, category }));
        if (image) formData.append('imageFile', image);

        try {
            if (editingPlace) {
                await axios.put(`${API_BASE_URL}/updatePlace/${editingPlace.placeId}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                toast.success('Place updated successfully!');
            } else {
                await axios.post(`${API_BASE_URL}/addplace`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                toast.success('Place added successfully!');
            }
            fetchPlaces();
            resetForm();
        } catch (error) {
            toast.error('Error adding/updating place!');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/delete/${id}`);
            toast.success('Place deleted successfully!');
            fetchPlaces();
        } catch (error) {
            toast.error('Error deleting place!');
        }
    };

    const resetForm = () => {
        setPlaceName('');
        setDescription('');
        setLocation('');
        setImage(null);
        setPreviewImage(null);
        setCategory('');
        setEditingPlace(null);
        setIsAddingPlace(false);
    };

    const handleSearch = () => {
        if (!searchTerm) {
            setFilteredPlaces(places);
        } else {
            const filtered = places.filter((place) =>
                place.placeName.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPlaces(filtered);
        }
    };

    const handleEdit = (place) => {
        setPlaceName(place.placeName);
        setDescription(place.description);
        setLocation(place.location);
        setPreviewImage(place.placeImagePath);
        setCategory(place.category);
        setEditingPlace(place);
        setIsAddingPlace(false);
    };

    const handleAddPlace = () => {
        resetForm();
        setIsAddingPlace(true);
    };

    return (
        <div className="container mt-5">
            <ToastContainer />
            <h3>{editingPlace ? 'Edit Travel Place' : isAddingPlace ? 'Add New Place' : 'All Travel Places'}</h3>

            {(editingPlace || isAddingPlace) && (
                <form onSubmit={handleSubmit} className="mt-4" encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="placeName" className="form-label">Place Name</label>
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
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
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
                        <label htmlFor="image" className="form-label">Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            onChange={handleImageChange}
                        />
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="mt-3"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select
                            className="form-control"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            >
                            <option value="" disabled>
                                Select a category
                            </option>
                            <option value="Beach">Beach</option>
                            <option value="Mountain">Mountain</option>
                            <option value="Historical">Historical</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Cultural">Cultural</option>
                            </select>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        {editingPlace ? 'Update Place' : 'Add Place'}
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

            {!editingPlace && !isAddingPlace && (
                <button onClick={handleAddPlace} className="btn btn-success mb-3">
                    Add Place
                </button>
            )}

            <div className="mt-3 mb-3">
                <label htmlFor="search" className="form-label">Search by Place Name</label>
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
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPlaces.map((place) => (
                        <tr key={place.placeId}>
                            <td>{place.placeName}</td>
                            <td>{place.description}</td>
                            <td>{place.location}</td>
                            <td>{place.category}</td>
                            <td>
                                {place.placeImagePath && (
                                    <img
                                        src={place.placeImagePath}
                                        alt="Place"
                                        style={{ maxWidth: '100px', height: 'auto' }}
                                    />
                                )}
                            </td>
                            <td>
                                <div className="d-flex">
                                    <button
                                        onClick={() => handleEdit(place)}
                                        className="btn btn-warning me-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(place.placeId)}
                                        className="btn btn-danger"
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
    );
};

export default Places;
