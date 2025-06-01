package com.example.cpuapp.controller;

import com.example.cpuapp.model.CPU;
import com.example.cpuapp.repository.CPURepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for managing CPU operations.
 * Provides endpoints for CRUD operations on CPU entities.
 */
@RestController
@RequestMapping("/api/cpus")
@CrossOrigin(origins = "http://localhost:3000")
public class CPUController {
    
    @Autowired
    private CPURepository cpuRepository;

    /**
     * GET /api/cpus : Get all CPUs
     * @return List of all CPUs in the database
     */
    @GetMapping
    public List<CPU> getAllCPUs() {
        return cpuRepository.findAll();
    }

    /**
     * GET /api/cpus/{id} : Get a specific CPU by ID
     * @param id The ID of the CPU to retrieve
     * @return The CPU if found, or 404 Not Found
     */
    @GetMapping("/{id}")
    public ResponseEntity<CPU> getCPUById(@PathVariable Long id) {
        return cpuRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * POST /api/cpus : Create a new CPU
     * @param cpu The CPU object to create
     * @return The created CPU object
     */
    @PostMapping
    public CPU createCPU(@RequestBody CPU cpu) {
        return cpuRepository.save(cpu);
    }

    /**
     * PUT /api/cpus/{id} : Update an existing CPU
     * @param id The ID of the CPU to update
     * @param cpuDetails The updated CPU details
     * @return The updated CPU if found, or 404 Not Found
     */
    @PutMapping("/{id}")
    public ResponseEntity<CPU> updateCPU(@PathVariable Long id, @RequestBody CPU cpuDetails) {
        return cpuRepository.findById(id)
                .map(cpu -> {
                    // Update all fields
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

    /**
     * DELETE /api/cpus/{id} : Delete a CPU
     * @param id The ID of the CPU to delete
     * @return 200 OK if deleted, 404 Not Found if not found
     */
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