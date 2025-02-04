package org.jufupu.benefits_checker.model;

public class User {
    private final String name;
    private final double income;
    private final int familySize;
    private final String location;
    
    public User(String name, double income, int familySize, String location) {
        this.name = name;
        this.income = income;
        this.familySize = familySize;
        this.location = location;
    }

    public String getName() { return name; }
    public double getIncome() { return income; }
    public int getFamilySize() { return familySize; }
    public String getLocation() { return location; }
} 