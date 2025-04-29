package org.jufupu.benefits_checker.service;

import java.util.List;
import java.util.stream.Collectors;

import org.jufupu.benefits_checker.model.Benefit;
import org.jufupu.benefits_checker.model.User;
import org.springframework.stereotype.Service;

@Service
public class EligibilityService {
    private final List<Benefit> benefits;

    public EligibilityService(List<Benefit> benefits) {
        this.benefits = benefits;
    }

    public List<Benefit> checkEligibility(User user) {
        return benefits.stream()
            .filter(benefit -> benefit.isEligible(user))
            .collect(Collectors.toList());
    }
} 