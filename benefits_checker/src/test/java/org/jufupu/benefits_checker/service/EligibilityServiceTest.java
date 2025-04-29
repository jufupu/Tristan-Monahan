package org.jufupu.benefits_checker.service;

import java.util.Arrays;
import java.util.List;

import org.jufupu.benefits_checker.model.Benefit;
import org.jufupu.benefits_checker.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eligibility Service Tests")
class EligibilityServiceTest {
    private EligibilityService eligibilityService;
    private List<Benefit> benefits;

    @BeforeEach
    void setUp() {
        benefits = Arrays.asList(
            new Benefit("Test Benefit", 30000.0, 4, "Glasgow")
        );
        eligibilityService = new EligibilityService(benefits);
    }

    @Test
    void shouldBeEligibleForBenefit() {
        User user = new User("John", 25000.0, 3, "Glasgow");
        List<Benefit> eligibleBenefits = eligibilityService.checkEligibility(user);
        assertFalse(eligibleBenefits.isEmpty());
        assertEquals(1, eligibleBenefits.size());
        assertEquals("Test Benefit", eligibleBenefits.get(0).getName());
    }

    @Test
    void shouldNotBeEligibleDueToIncome() {
        User user = new User("Rich", 35000.0, 3, "Glasgow");
        List<Benefit> eligibleBenefits = eligibilityService.checkEligibility(user);
        assertTrue(eligibleBenefits.isEmpty());
    }

    @Test
    void ineligibleLocationShouldNotPass() {
        User wrongLocationUser = new User("Jane", 25000.0, 3, "Boston");
        List<Benefit> eligibleBenefits = eligibilityService.checkEligibility(wrongLocationUser);
        assertTrue(eligibleBenefits.isEmpty());
    }
} 