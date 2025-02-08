/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package org.jufupu.dnd_damage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 *
 * @author tristanmonahan
 */
@SpringBootApplication
@ComponentScan(basePackages = "org.jufupu.dnd_damage")
public class Dnd_damage {

    public static void main(String[] args) {
        SpringApplication.run(Dnd_damage.class, args);
    }
}
