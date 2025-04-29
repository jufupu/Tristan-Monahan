package org.jufupu.benefits_checker.model;

public class BenefitResponse {
    private final String name;
    private final String description;
    private final boolean eligible;

    public BenefitResponse(String name, String description, boolean eligible) {
        this.name = name;
        this.description = description;
        this.eligible = eligible;
    }

    public String getName() { return name; }
    public String getDescription() { return description; }
    public boolean isEligible() { return eligible; }
} 