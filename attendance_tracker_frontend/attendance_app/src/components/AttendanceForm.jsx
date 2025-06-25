import React, { useState } from 'react';
import axios from 'axios';

export default function AttendanceForm() {
  const [form, setForm] = useState({ studentName: '', date: '', present: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/attendance', form);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="attendance-form">
      <input name="studentName" value={form.studentName} onChange={handleChange} placeholder="Student Name" required />
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <label>
        <input type="checkbox" name="present" checked={form.present} onChange={handleChange} /> Present
      </label>
      <button type="submit">Add Attendance</button>
    </form>
  );
}