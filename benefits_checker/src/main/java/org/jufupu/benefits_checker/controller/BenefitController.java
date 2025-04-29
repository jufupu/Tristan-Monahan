package org.jufupu.benefits_checker.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.jufupu.benefits_checker.model.Benefit;
import org.jufupu.benefits_checker.model.User;
import org.jufupu.benefits_checker.service.EligibilityService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class BenefitController {
    private final EligibilityService eligibilityService;
    public BenefitController(EligibilityService eligibilityService) {
        this.eligibilityService = eligibilityService;
    }

    @PostMapping("/check")
    public String checkEligibility(@RequestBody User user) {
        List<Benefit> eligibleBenefits = eligibilityService.checkEligibility(user);
        return eligibleBenefits.isEmpty() ? 
            "No eligible benefits found." : 
            "Eligible for: " + eligibleBenefits.stream()
                .map(Benefit::getName)
                .collect(Collectors.joining(", "));
    }

    @GetMapping("/test")
    public String test() {
        return "API is working!";
    }
} 