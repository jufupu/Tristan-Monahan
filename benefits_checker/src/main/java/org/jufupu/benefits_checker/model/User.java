package org.jufupu.benefits_checker.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
    private final String name;
    private final double income;
    private final int familySize;
    private final String location;
    
    @JsonCreator
    public User(
        @JsonProperty("name") String name,
        @JsonProperty("income") double income,
        @JsonProperty("familySize") int familySize,
        @JsonProperty("location") String location
    ) {
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