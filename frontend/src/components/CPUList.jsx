import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CPUList.css';

/**
 * CPUList Component
 * Displays a list of all CPUs in a table format with search and sort functionality.
 * Allows selection of a CPU for detailed view/edit.
 * 
 * @param {Object} props
 * @param {Function} props.onSelectCPU - Callback function when a CPU is selected
 */
function CPUList({ onSelectCPU }) {
  // State for storing CPU data
  const [cpus, setCpus] = useState([]);
  // Loading state for showing loading indicator
  const [loading, setLoading] = useState(true);
  // Error state for showing error messages
  const [error, setError] = useState(null);
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');
  // State for sort configuration
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Fetch CPU data when component mounts
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/api/cpus')
      .then(response => {
        setCpus(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching CPUs:', error);
        setError('Failed to load CPUs. Please try again later.');
        setLoading(false);
      });
  }, []);

  // Handle search
  const filteredCPUs = cpus.filter(cpu => 
    cpu.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cpu.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cpu.socket.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle sorting
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedCPUs = [...filteredCPUs].sort((a, b) => {
    if (!sortConfig.key) return 0;

    let aValue = sortConfig.key === 'socket' ? a.socket.name : a[sortConfig.key];
    let bValue = sortConfig.key === 'socket' ? b.socket.name : b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  // Show loading spinner while data is being fetched
  if (loading) return <div className="loading">Loading...</div>;
  // Show error message if fetch failed
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="cpu-list">
      <h2>CPU List</h2>
      
      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by brand, model, or socket..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('brand')} className="sortable">
              Brand {sortConfig.key === 'brand' && (
                <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
              )}
            </th>
            <th onClick={() => handleSort('model')} className="sortable">
              Model {sortConfig.key === 'model' && (
                <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
              )}
            </th>
            <th onClick={() => handleSort('socket')} className="sortable">
              Socket {sortConfig.key === 'socket' && (
                <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCPUs.map(cpu => (
            <tr 
              key={cpu.id} 
              onClick={() => onSelectCPU(cpu)}
              className="cpu-row"
            >
              <td>{cpu.brand}</td>
              <td>{cpu.model}</td>
              <td>{cpu.socket.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {sortedCPUs.length === 0 && (
        <div className="no-results">No CPUs found matching your search.</div>
      )}
    </div>
  );
}

export default CPUList;