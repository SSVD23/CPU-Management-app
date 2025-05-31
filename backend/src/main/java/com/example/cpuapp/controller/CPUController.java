package com.example.cpuapp.controller;

import com.example.cpuapp.model.CPU;
import com.example.cpuapp.repository.CPURepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cpus")
@CrossOrigin(origins = "http://localhost:3000")
public class CPUController {
    @Autowired
    private CPURepository cpuRepository;

    @GetMapping
    public List<CPU> getAllCPUs() {
        return cpuRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CPU> getCPUById(@PathVariable Long id) {
        return cpuRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public CPU createCPU(@RequestBody CPU cpu) {
        return cpuRepository.save(cpu);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CPU> updateCPU(@PathVariable Long id, @RequestBody CPU cpuDetails) {
        return cpuRepository.findById(id)
                .map(cpu -> {
                    cpu.setBrand(cpuDetails.getBrand());
                    cpu.setModel(cpuDetails.getModel());
                    cpu.setSocket(cpuDetails.getSocket());
                    cpu.setClockSpeed(cpuDetails.getClockSpeed());
                    cpu.setCores(cpuDetails.getCores());
                    cpu.setThreads(cpuDetails.getThreads());
                    cpu.setTdp(cpuDetails.getTdp());
                    cpu.setPrice(cpuDetails.getPrice());
                    CPU updatedCPU = cpuRepository.save(cpu);
                    return ResponseEntity.ok(updatedCPU);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCPU(@PathVariable Long id) {
        return cpuRepository.findById(id)
                .map(cpu -> {
                    cpuRepository.delete(cpu);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}