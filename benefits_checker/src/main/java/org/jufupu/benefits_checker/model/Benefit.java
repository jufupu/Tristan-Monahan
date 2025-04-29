package org.jufupu.benefits_checker.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Benefit {
    private static final Logger logger = LoggerFactory.getLogger(Benefit.class);
    private final String name;
    private final double incomeLimit;
    private final int familySizeLimit;
    private final String location;

    public Benefit(String name, double incomeLimit, int familySizeLimit, String location) {
        this.name = name;
        this.incomeLimit = incomeLimit;
        this.familySizeLimit = familySizeLimit;
        this.location = location;
    }

    public String getName() { return name; }

    public boolean isEligible(User user) {
        boolean incomeCheck = user.getIncome() <= incomeLimit;
        boolean familyCheck = user.getFamilySize() <= familySizeLimit;
        boolean locationCheck = user.getLocation().equals(location);
        
        logger.info("Checking {} for user in {}", name, user.getLocation());
        logger.info("Income check: {} <= {} = {}", user.getIncome(), incomeLimit, incomeCheck);
        logger.info("Family size check: {} <= {} = {}", user.getFamilySize(), familySizeLimit, familyCheck);
        logger.info("Location check: {} equals {} = {}", user.getLocation(), location, locationCheck);
        
        return incomeCheck && familyCheck && locationCheck;
    }

    public double getIncomeLimit() { return incomeLimit; }
    public String getLocation() { return location; }
} 