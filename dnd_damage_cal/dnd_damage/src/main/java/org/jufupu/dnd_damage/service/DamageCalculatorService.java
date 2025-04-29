package org.jufupu.dnd_damage.service;

import org.jufupu.dnd_damage.model.Move;
import org.springframework.stereotype.Service;

@Service
public class DamageCalculatorService {
    private final DiceRoller diceRoller;
    
    public DamageCalculatorService(DiceRoller diceRoller) {
        this.diceRoller = diceRoller;
    }
    
    public int calculateDamage(Move move, boolean isCritical, boolean isSneakAttack) {
        int baseDamage = diceRoller.roll(move.getDiceCount(), move.getDiceSides());
        
        if (isCritical) {
            baseDamage += diceRoller.roll(move.getDiceCount(), move.getDiceSides());
        }
        
        if (isSneakAttack) {
            // Assuming sneak attack adds 2d6 damage
            baseDamage += diceRoller.roll(2, 6);
        }
        
        return baseDamage + move.getModifier();
    }
}