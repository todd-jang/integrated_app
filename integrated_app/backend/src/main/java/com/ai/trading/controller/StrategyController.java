package com.ai.trading.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/strategy")
public class StrategyController {
    @PostMapping
    public ResponseEntity<String> postStrategy(@RequestBody Strategy strategy) {
        return ResponseEntity.ok("Java received strategy: " + strategy.getName());
    }
}