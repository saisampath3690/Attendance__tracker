import React from 'react';
import AttendanceForm from './components/AttendanceForm';
import AttendanceList from './components/AttendanceList';

export default function App() {
  return (
    <div className="app-container">
      <h1>Attendance Tracker</h1>
      <AttendanceForm />
      <AttendanceList />
    </div>
  );
}