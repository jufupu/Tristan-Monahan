package org.jufupu.dnd_damage.model;

public class Move {
    private String name;
    private String damageType;
    private int diceCount;
    private int diceSides;
    private int modifier;
    
    // Default constructor needed for JSON deserialization
    public Move() {}
    
    public Move(String name, int diceCount, int diceSides, int modifier) {
        this.name = name;
        this.diceCount = diceCount;
        this.diceSides = diceSides;
        this.modifier = modifier;
    }
    
    // Getters and setters
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getDiceCount() {
        return diceCount;
    }
    
    public void setDiceCount(int diceCount) {
        this.diceCount = diceCount;
    }
    
    public int getDiceSides() {
        return diceSides;
    }
    
    public void setDiceSides(int diceSides) {
        this.diceSides = diceSides;
    }
    
    public int getModifier() {
        return modifier;
    }
    
    public void setModifier(int modifier) {
        this.modifier = modifier;
    }

    public String getDamageType() {
        return damageType;
    }

    public void setDamageType(String damageType) {
        this.damageType = damageType;
    }
}
