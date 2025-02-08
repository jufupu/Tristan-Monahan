package org.jufupu.dnd_damage.controller;

import org.jufupu.dnd_damage.model.Move;
import org.jufupu.dnd_damage.service.DamageCalculatorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/damage")
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
        logger.info("Calculate endpoint called with move: {}, critical: {}, sneakAttack: {}", 
                   move, isCritical, isSneakAttack);
        
        int damage = damageCalculatorService.calculateDamage(move, isCritical, isSneakAttack);
        return new DamageResponse(damage);
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