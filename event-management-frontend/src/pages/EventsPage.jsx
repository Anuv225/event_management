import React, { useState, useEffect } from "react";
import {
  fetchAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../services/ApiService";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const data = await fetchAllEvents();
      setEvents(data);
    } catch (err) {
      setError("Failed to fetch events.");
      console.error("Error fetching events:", err);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const eventDateTime = new Date(dateTime).toISOString();
    const payload = { name, description, eventDateTime };
    try {
      if (editingId) {
        await updateEvent(editingId, payload);
      } else {
        await createEvent(payload);
      }
      fetchEvents();
      resetForm();
    } catch (err) {
      setError("Error saving event.");
      console.error("Error:", err);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    setLoading(true);
    try {
      await deleteEvent(id);
      fetchEvents();
    } catch (err) {
      setError("Error deleting event.");
      console.error("Error deleting event:", err);
    }
    setLoading(false);
  };

  const handleEdit = (event) => {
    navigate(`/edit/${event.eventId}`);
  };

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setDescription("");
    setDateTime("");
    setError("");
  };

  return (
    <>
      <h2>Events</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="border"
          />
        </div>
        <div>
          <label htmlFor="dateTime">Date & Time:</label>
          <input
            type="datetime-local"
            id="dateTime"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
            className="border"
          />
        </div>
        <button type="submit" className="border">
          {editingId ? "Update Event" : "Create Event"}
        </button>
        {editingId && (
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Description</th>
              <th>Date & Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events &&
              events.map((event) => (
                <tr key={event.eventId}>
                  <td>{event.name}</td>
                  <td>{event.description}</td>
                  <td>{new Date(event.eventDateTime).toLocaleString()}</td>
                  <td>
                    <button onClick={() => handleEdit(event)}>Edit</button>
                    <button onClick={() => handleDelete(event.eventId)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default EventsPage;
