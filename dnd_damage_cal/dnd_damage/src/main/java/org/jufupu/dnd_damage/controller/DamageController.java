package org.jufupu.dnd_damage.controller;

import org.jufupu.dnd_damage.model.Move;
import org.jufupu.dnd_damage.service.DamageCalculatorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/damage")
@CrossOrigin(origins = "http://localhost:3000")
public class DamageController {
    private static final Logger logger = LoggerFactory.getLogger(DamageController.class);
    private final DamageCalculatorService damageCalculatorService;

    public DamageController(DamageCalculatorService damageCalculatorService) {
        this.damageCalculatorService = damageCalculatorService;
        logger.info("DamageController initialized");
    }

    @GetMapping("/test")
    public String test() {
        logger.info("Test endpoint called");
        return "Damage controller is working!";
    }

    @PostMapping("/calculate")
    public DamageResponse calculateDamage(@RequestBody Move move, 
                                        @RequestParam(defaultValue = "false") boolean isCritical,
                                        @RequestParam(defaultValue = "false") boolean isSneakAttack) {
        logger.info("Received move: {}", move);
        logger.info("Critical: {}, SneakAttack: {}", isCritical, isSneakAttack);
        
        try {
            int damage = damageCalculatorService.calculateDamage(move, isCritical, isSneakAttack);
            logger.info("Calculated damage: {}", damage);
            return new DamageResponse(damage);
        } catch (Exception e) {
            logger.error("Error calculating damage", e);
            throw e;
        }
    }

    // Response class
    public static class DamageResponse {
        private final int totalDamage;

        public DamageResponse(int totalDamage) {
            this.totalDamage = totalDamage;
        }

        public int getTotalDamage() {
            return totalDamage;
        }
    }
}