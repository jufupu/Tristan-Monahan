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
            new Benefit("Low Income Support", 30000.0, 4, "New York"),
            new Benefit("Family Assistance", 50000.0, 6, "California"),
            new Benefit("Housing Aid", 40000.0, 3, "Texas")
        );
    }
} 