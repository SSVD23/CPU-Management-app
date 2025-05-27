import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CPUDetails({ cpu, onClose }) {
  const [formData, setFormData] = useState(cpu);
  const [sockets, setSockets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/sockets')
      .then(response => setSockets(response.data))
      .catch(error => console.error('Error fetching sockets:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'socket') {
      setFormData({ ...formData, socket: { id: value, name: sockets.find(s => s.id === parseInt(value))?.name } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/cpus/${cpu.id}`, formData)
      .then(() => {
        alert('CPU updated successfully!');
        onClose();
      })
      .catch(error => console.error('Error updating CPU:', error));
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/cpus/${cpu.id}`)
      .then(() => {
        alert('CPU deleted successfully!');
        onClose();
      })
      .catch(error => console.error('Error deleting CPU:', error));
  };

  return (
    <div className="cpu-details">
      <h2>Edit CPU</h2>
      <form onSubmit={handleSubmit}>
        <label>Brand:</label>
        <input name="brand" value={formData.brand} onChange={handleChange} />
        <label>Model:</label>
        <input name="model" value={formData.model} onChange={handleChange} />
        <label>Socket:</label>
        <select name="socket" value={formData.socket.id} onChange={handleChange}>
          {sockets.map(socket => (
            <option key={socket.id} value={socket.id}>{socket.name}</option>
          ))}
        </select>
        <label>Clockspeed (GHz):</label>
        <input name="clockspeed" type="number" step="0.1" value={formData.clockspeed} onChange={handleChange} />
        <label>Cores:</label>
        <input name="cores" type="number" value={formData.cores} onChange={handleChange} />
        <label>Threads:</label>
        <input name="threads" type="number" value={formData.threads} onChange={handleChange} />
        <label>TDP (W):</label>
        <input name="tdp" type="number" value={formData.tdp} onChange={handleChange} />
        <label>Price (€):</label>
        <input name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} />
        <button type="submit">Save</button>
        <button type="button" onClick={handleDelete}>Delete</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
}

export default CPUDetails;