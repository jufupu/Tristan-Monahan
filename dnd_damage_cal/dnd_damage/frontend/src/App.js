import React, { useState } from 'react';
import axios from 'axios';
import MoveSelector from './components/MoveSelector';
import MultiplierToggles from './components/MultiplierToggles';

const moves = [
  {
    name: "shortsword",
    damageType: "Physical",
    diceCount: 1,
    diceSides: 6,
    modifier: 3
  },
  {
    name: "Fireball",
    damageType: "Fire",
    diceCount: 8,
    diceSides: 6,
    modifier: 0
  }
];

function App() {
  const [selectedMove, setSelectedMove] = useState(moves[0]);
  const [isCritical, setIsCritical] = useState(false);
  const [isSneakAttack, setIsSneakAttack] = useState(false);
  const [damage, setDamage] = useState(null);

  const calculateDamage = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/damage/calculate?isCritical=${isCritical}&isSneakAttack=${isSneakAttack}`, 
        selectedMove
      );
      setDamage(response.data.totalDamage);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to calculate damage: ' + error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">D&D Damage Calculator</h1>
                <MoveSelector moves={moves} onSelect={(name) => setSelectedMove(moves.find(m => m.name === name))} />
                <MultiplierToggles 
                  isCritical={isCritical} 
                  isSneakAttack={isSneakAttack} 
                  setCritical={setIsCritical} 
                  setSneakAttack={setIsSneakAttack} 
                />
                <button 
                  onClick={calculateDamage} 
                  className="w-full py-3 px-6 text-white rounded-lg bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition hover:-translate-y-0.5"
                >
                  Calculate Damage
                </button>
                {damage !== null && (
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-center text-purple-700">
                      Damage: {damage}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
