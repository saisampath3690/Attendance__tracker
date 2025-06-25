package com.example.attendance_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.attendance_tracker.model.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
}
