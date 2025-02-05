package org.jufupu.benefits_checker.config;

import java.util.Arrays;
import java.util.List;

import org.jufupu.benefits_checker.model.Benefit;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BenefitConfig {
    
    @Bean
    public List<Benefit> benefits() {
        return Arrays.asList(
            new Benefit("Low Income Support", 30000.0, 4, "Glasgow"),
            new Benefit("Family Assistance", 50000.0, 6, "Edinburgh"),
            new Benefit("Housing Aid", 40000.0, 3, "Aberdeen"),
            new Benefit("Child Support Grant", 45000.0, 5, "Glasgow"),
            new Benefit("Energy Bill Support", 35000.0, 4, "Edinburgh"),
            new Benefit("Council Tax Reduction", 28000.0, 3, "Glasgow"),
            new Benefit("School Meals Support", 32000.0, 4, "Aberdeen"),
            new Benefit("Winter Heating Payment", 38000.0, 3, "Edinburgh"),
            new Benefit("Disability Living Allowance", 55000.0, 6, "Glasgow"),
            new Benefit("Universal Credit", 25000.0, 3, "Aberdeen")
        );
    }
} 