import React, { useState } from "react";
import "./UserManagement.css";


export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    contact: "",
    email: "",
    designation: "",
    company: "",
    address: "",
  });
  const [searchId, setSearchId] = useState("");
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.id.trim()) {
      setMessage("User ID is required");
      return false;
    }
    if (!form.name.trim()) {
      setMessage("Name is required");
      return false;
    }
    if (!form.email.trim()) {
      setMessage("Email is required");
      return false;
    }
    if (!editing && users.some((u) => u.id === form.id)) {
      setMessage("User ID already exists");
      return false;
    }
    return true;
  };

  const handleAdd = () => {
    if (!validateForm()) return;
    setUsers([...users, { ...form }]);
    setMessage("User added successfully");
    resetForm();
    setTimeout(() => setMessage(""), 3000);
  };

  const handleUpdate = () => {
    if (!validateForm()) return;
    setUsers(users.map((u) => (u.id === form.id ? { ...form } : u)));
    setMessage("User updated successfully");
    setEditing(false);
    resetForm();
    setTimeout(() => setMessage(""), 3000);
  };

  const handleDelete = (id) => {
    if (confirm(`Are you sure you want to delete user ${id}?`)) {
      setUsers(users.filter((u) => u.id !== id));
      setMessage("User deleted successfully");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleEdit = (user) => {
    setForm({ ...user });
    setEditing(true);
    setMessage("");
  };

  const resetForm = () => {
    setForm({
      id: "",
      name: "",
      contact: "",
      email: "",
      designation: "",
      company: "",
      address: "",
    });
    setEditing(false);
    setMessage("");
  };

  const filteredUsers = searchId.trim()
    ? users.filter((u) => u.id.toLowerCase().includes(searchId.toLowerCase()))
    : users;

  return (
    <div className="page">
      <div className="card">
        <h1>User Management</h1>

        {/* Message Alert */}
        {message && <div className="alert">{message}</div>}

        {/* Form Section */}
        <div className="form-section">
          <input 
            name="id" 
            value={form.id} 
            onChange={handleChange} 
            placeholder="User ID" 
            disabled={editing}
            className={editing ? "disabled" : ""}
          />
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Full Name" 
          />
          <input 
            name="contact" 
            value={form.contact} 
            onChange={handleChange} 
            placeholder="Contact Number" 
          />
          <input 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="Email Address" 
          />
          <input 
            name="designation" 
            value={form.designation} 
            onChange={handleChange} 
            placeholder="Designation" 
          />
          <input 
            name="company" 
            value={form.company} 
            onChange={handleChange} 
            placeholder="Company" 
          />
          <input 
            name="address" 
            value={form.address} 
            onChange={handleChange} 
            placeholder="Address" 
            className="full-width" 
          />
        </div>

        <div className="button-row">
          {!editing ? (
            <button className="primary-btn" onClick={handleAdd}>
              ➕ Add User
            </button>
          ) : (
            <button className="update-btn" onClick={handleUpdate}>
              ✓ Update User
            </button>
          )}
          <button className="secondary-btn" onClick={resetForm}>
            ✕ Clear
          </button>
        </div>

        {/* Search */}
        <div className="search-container">
          <input
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="🔍 Search by User ID..."
          />
        </div>

        {/* User Cards Display */}
        <div className="users-container">
          {filteredUsers.length === 0 ? (
            <div className="no-data">
              <p>📭 No users found</p>
              {searchId && <p className="hint">Try adjusting your search criteria</p>}
            </div>
          ) : (
            <div className="users-grid">
              <div className="records-header">
                {filteredUsers.length} {filteredUsers.length === 1 ? "Record" : "Records"}
              </div>
              {filteredUsers.map((u) => (
                <div key={u.id} className="user-card">
                  <div className="user-card-header">
                    <div className="user-id-badge">{u.id}</div>
                    <div className="user-name">{u.name}</div>
                  </div>
                  <div className="user-card-details">
                    <div className="detail-row">
                      <span className="label">Email:</span>
                      <span className="value">{u.email}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Contact:</span>
                      <span className="value">{u.contact}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Designation:</span>
                      <span className="value">{u.designation}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Company:</span>
                      <span className="value">{u.company}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Address:</span>
                      <span className="value">{u.address}</span>
                    </div>
                  </div>
                  <div className="user-card-actions">
                    <button className="edit-btn" onClick={() => handleEdit(u)}>
                      ✎ Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(u.id)}>
                      🗑 Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

