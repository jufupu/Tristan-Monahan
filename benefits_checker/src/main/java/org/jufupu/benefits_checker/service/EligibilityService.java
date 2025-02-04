package org.jufupu.benefits_checker.service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import org.jufupu.benefits_checker.model.Benefit;
import org.jufupu.benefits_checker.model.User;
import org.jufupu.benefits_checker.model.BenefitResponse;

@Service
public class EligibilityService {
    private final List<Benefit> benefits;

    public EligibilityService(List<Benefit> benefits) {
        this.benefits = benefits;
    }

    public void checkEligibility(User user) {
        System.out.println("Checking eligibility for " + user.getLocation());
        for (Benefit benefit : benefits) {
            if (benefit.isEligible(user)) {
                System.out.println("Eligible for: " + benefit.getName());
            }
        }
    }
} 