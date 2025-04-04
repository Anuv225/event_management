import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { baseURL } from "../Config/Config.json";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    name: "",
    description: "",
    eventDateTime: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  const fetchEventDetails = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication required");
      }
      
      const response = await fetch(`${baseURL}/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch event: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Format the date for the datetime-local input
      const eventDate = new Date(data.eventDateTime);
      const formattedDate = eventDate.toISOString().slice(0, 16);
      
      setEvent({
        ...data,
        eventDateTime: formattedDate
      });
    } catch (error) {
      setError("Error fetching event: " + error.message);
      console.error("Error fetching event:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication required");
      }
      
      const updatedEvent = {
        ...event,
        eventDateTime: new Date(event.eventDateTime).toISOString()
      };
      
      const response = await fetch(`${baseURL}/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(updatedEvent),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update event: ${response.status}`);
      }
      
      // Navigate back to events page after successful update
      navigate("/events");
    } catch (error) {
      setError("Error updating event: " + error.message);
      console.error("Error updating event:", error);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/events");
  };

  if (loading && !error) {
    return <p>Loading event details...</p>;
  }

  return (
    <>
      <h2>Edit Event</h2>
      
      {error && <p className="error">{error}</p>}
      
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={event.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={event.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="eventDateTime">Date & Time:</label>
          <input
            type="datetime-local"
            id="eventDateTime"
            name="eventDateTime"
            value={event.eventDateTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>Save Changes</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </>
  );
};

export default EditPage;
