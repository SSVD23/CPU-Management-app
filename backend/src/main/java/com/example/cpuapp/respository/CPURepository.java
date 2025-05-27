package com.example.cpuapp.repository;

import com.example.cpuapp.model.CPU;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CPURepository extends JpaRepository<CPU, Long> {
}