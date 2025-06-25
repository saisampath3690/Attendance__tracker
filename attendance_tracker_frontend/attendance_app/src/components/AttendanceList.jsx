import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AttendanceList() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:5000/attendance');
    setData(res.data);
  };

  const markAbsent = async (id) => {
    const record = data.find((item) => item.id === id);
    const updated = { ...record, present: false };
    await axios.post('http://localhost:5000/attendance', updated);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="attendance-list">
      <h2>📄 Attendance Records</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} className={item.present ? 'present' : 'absent'}>
            {item.date} - <strong>{item.studentName}</strong> was {item.present ? 'Present' : 'Absent'}
            {item.present && (
              <button onClick={() => markAbsent(item.id)} className="mark-absent">Make Absent</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}