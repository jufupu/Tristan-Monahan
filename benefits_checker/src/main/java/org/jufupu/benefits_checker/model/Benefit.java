package org.jufupu.benefits_checker.model;

public class Benefit {
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
        return user.getIncome() <= incomeLimit &&
               user.getFamilySize() <= familySizeLimit &&
               user.getLocation().equals(location);
    }

    public double getIncomeLimit() { return incomeLimit; }
    public String getLocation() { return location; }
} 