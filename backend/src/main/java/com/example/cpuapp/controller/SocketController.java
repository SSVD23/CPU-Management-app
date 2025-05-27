package com.example.cpuapp.controller;

import com.example.cpuapp.model.Socket;
import com.example.cpuapp.repository.SocketRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sockets")
@CrossOrigin(origins = "http://localhost:3000")
public class SocketController {
    private final SocketRepository socketRepository;

    public SocketController(SocketRepository socketRepository) {
        this.socketRepository = socketRepository;
    }

    @GetMapping
    public List<Socket> getAll() {
        return socketRepository.findAll();
    }
}