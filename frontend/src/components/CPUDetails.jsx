import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CPUDetails.css';

function CPUDetails({ cpu, onClose }) {
  const [formData, setFormData] = useState(cpu);
  const [sockets, setSockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/api/sockets')
      .then(response => {
        setSockets(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching sockets:', error);
        setError('Failed to load sockets. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'socket') {
      const selectedSocket = sockets.find(s => s.id === parseInt(value));
      setFormData({ ...formData, socket: selectedSocket });
    } else {
      const parsedValue = ['clockSpeed', 'price'].includes(name) ? parseFloat(value) :
                         ['cores', 'threads', 'tdp'].includes(name) ? parseInt(value) :
                         value;
      setFormData({ ...formData, [name]: parsedValue });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await axios.put(`http://localhost:8080/api/cpus/${cpu.id}`, formData);
      onClose();
    } catch (error) {
      console.error('Error updating CPU:', error);
      setError('Failed to update CPU. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/cpus/${cpu.id}`)
      .then(() => {
        alert('CPU deleted successfully!');
        onClose();
      })
      .catch(error => console.error('Error deleting CPU:', error));
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="cpu-details">
      <h2>Edit CPU</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Brand:</label>
          <input
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Model:</label>
          <input
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Socket:</label>
          <select
            name="socket"
            value={formData.socket.id}
            onChange={handleChange}
            required
          >
            {sockets.map(socket => (
              <option key={socket.id} value={socket.id}>
                {socket.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Clock Speed (GHz):</label>
          <input
            name="clockSpeed"
            type="number"
            step="0.1"
            min="0.1"
            value={formData.clockSpeed}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Cores:</label>
          <input
            name="cores"
            type="number"
            min="1"
            value={formData.cores}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Threads:</label>
          <input
            name="threads"
            type="number"
            min="1"
            value={formData.threads}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>TDP (W):</label>
          <input
            name="tdp"
            type="number"
            min="1"
            value={formData.tdp}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price (EUR):</label>
          <input
            name="price"
            type="number"
            step="0.01"
            min="0.01"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" disabled={saving}>
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button type="button" onClick={handleDelete}>Delete</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CPUDetails;