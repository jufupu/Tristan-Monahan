import React from 'react';

function MultiplierToggles({ isCritical, isSneakAttack, setCritical, setSneakAttack }) {
  return (
    <div className="space-y-4 mb-6">
      <label className="flex items-center space-x-3 cursor-pointer">
        <input 
          type="checkbox" 
          checked={isCritical} 
          onChange={e => setCritical(e.target.checked)}
          className="form-checkbox h-5 w-5 text-purple-500 rounded focus:ring-purple-500 border-gray-300"
        />
        <span className="text-gray-700 font-medium">Critical Hit</span>
      </label>
      <label className="flex items-center space-x-3 cursor-pointer">
        <input 
          type="checkbox" 
          checked={isSneakAttack} 
          onChange={e => setSneakAttack(e.target.checked)}
          className="form-checkbox h-5 w-5 text-purple-500 rounded focus:ring-purple-500 border-gray-300"
        />
        <span className="text-gray-700 font-medium">Sneak Attack</span>
      </label>
    </div>
  );
}

export default MultiplierToggles;