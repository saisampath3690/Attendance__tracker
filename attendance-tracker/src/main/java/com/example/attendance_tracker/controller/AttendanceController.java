package com.example.attendance_tracker.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.attendance_tracker.model.Attendance;
import com.example.attendance_tracker.service.AttendanceService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/attendance")
public class AttendanceController {

    private final AttendanceService service;

    public AttendanceController(AttendanceService service) {
        this.service = service;
    }

    @GetMapping
    public List<Attendance> getAll() {
        return service.findAll();
    }

    @PostMapping
    public Attendance add(@RequestBody Attendance attendance) {
        return service.save(attendance);
    }
}

