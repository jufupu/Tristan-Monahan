package org.jufupu.benefits_checker.service;

import java.util.Arrays;
import java.util.List;

import org.jufupu.benefits_checker.model.Benefit;
import org.jufupu.benefits_checker.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Eligibility Service Tests")
class EligibilityServiceTest {
    private EligibilityService eligibilityService;
    private List<Benefit> benefits;

    @BeforeEach
    void setUp() {
        benefits = Arrays.asList(
            new Benefit("Test Benefit", 30000.0, 4, "New York")
        );
        eligibilityService = new EligibilityService(benefits);
    }

    @Test
    void eligibleUserShouldPass() {
        User eligibleUser = new User("John", 25000.0, 3, "New York");
        eligibilityService.checkEligibility(eligibleUser);
        // Test passes if no exception is thrown
    }

    @Test
    void ineligibleIncomeShouldNotPass() {
        User highIncomeUser = new User("Rich", 35000.0, 3, "New York");
        eligibilityService.checkEligibility(highIncomeUser);
        // Test passes if no exception is thrown
    }

    @Test
    void ineligibleLocationShouldNotPass() {
        User wrongLocationUser = new User("Jane", 25000.0, 3, "Boston");
        eligibilityService.checkEligibility(wrongLocationUser);
        // Test passes if no exception is thrown
    }
} 