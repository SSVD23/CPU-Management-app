package com.example.cpuapp.controller;

import com.example.cpuapp.model.CPU;
import com.example.cpuapp.repository.CPURepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cpus")
@CrossOrigin(origins = "http://localhost:3000")
public class CPUController {
    private final CPURepository cpuRepository;

    public CPUController(CPURepository cpuRepository) {
        this.cpuRepository = cpuRepository;
    }

    @GetMapping
    public List<CPU> getAll() {
        return cpuRepository.findAll();
    }

    @GetMapping("/{id}")
    public CPU getById(@PathVariable Long id) {
        return cpuRepository.findById(id).orElse(null);
    }

    @PostMapping
    public CPU create(@RequestBody CPU cpu) {
        return cpuRepository.save(cpu);
    }

    @PutMapping("/{id}")
    public CPU update(@PathVariable Long id, @RequestBody CPU updatedCpu) {
        updatedCpu.setId(id);
        return cpuRepository.save(updatedCpu);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        cpuRepository.deleteById(id);
    }
}