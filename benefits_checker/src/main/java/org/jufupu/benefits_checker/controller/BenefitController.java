package org.jufupu.benefits_checker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.jufupu.benefits_checker.model.User;
import org.jufupu.benefits_checker.model.BenefitResponse;
import org.jufupu.benefits_checker.service.EligibilityService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BenefitController {
    private final EligibilityService eligibilityService;

    public BenefitController(EligibilityService eligibilityService) {
        this.eligibilityService = eligibilityService;
    }

    @PostMapping("/check")
    public String checkEligibility(@RequestBody User user) {
        eligibilityService.checkEligibility(user);
        return "Eligibility checked!";
    }

    @GetMapping("/test")
    public String test() {
        return "API is working!";
    }
} 