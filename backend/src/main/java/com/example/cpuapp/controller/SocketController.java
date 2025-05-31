package com.example.cpuapp.controller;

import com.example.cpuapp.model.Socket;
import com.example.cpuapp.repository.SocketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/sockets")
public class SocketController {
    
    @Autowired
    private SocketRepository socketRepository;
    
    @GetMapping
    public List<Socket> getAllSockets() {
        return socketRepository.findAll();
    }
}