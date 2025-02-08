package org.jufupu.dnd_damage.service;

import org.springframework.stereotype.Service;
import java.util.Random;

@Service
public class DiceRoller {
    private final Random random = new Random();

    public int roll(int diceCount, int diceSides) {
        int total = 0;
        for (int i = 0; i < diceCount; i++) {
            total += random.nextInt(diceSides) + 1;
        }
        return total;
    }
}