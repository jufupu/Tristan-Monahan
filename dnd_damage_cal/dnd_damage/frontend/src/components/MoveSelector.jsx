import React from 'react';

function MoveSelector({ moves, onSelect }) {
    return (
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Attack
            </label>
            <select 
                onChange={e => onSelect(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            >
                {moves.map(move => (
                    <option key={move.name} value={move.name}>
                        {move.name} ({move.damageType}) - {move.diceCount}d{move.diceSides} + {move.modifier}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default MoveSelector;
