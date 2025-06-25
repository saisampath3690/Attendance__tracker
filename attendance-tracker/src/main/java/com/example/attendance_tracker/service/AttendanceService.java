package com.example.attendance_tracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.attendance_tracker.model.Attendance;
import com.example.attendance_tracker.repository.AttendanceRepository;

@Service
public class AttendanceService {

    private final AttendanceRepository repository;

    public AttendanceService(AttendanceRepository repository) {
        this.repository = repository;
    }

    public List<Attendance> findAll() {
        return repository.findAll();
    }

    public Attendance save(Attendance attendance) {
        return repository.save(attendance);
    }

    // ✅ Added: Find attendance by ID for updates
    public Attendance findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Attendance not found with ID: " + id));
    }
}
