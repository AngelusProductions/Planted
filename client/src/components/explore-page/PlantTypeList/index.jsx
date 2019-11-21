import React from 'react';
import { plantTypeList } from './styles.css';
import PlantCardLarge from '../../UI/plant-cards/PlantCardLarge';

const PlantTypeList = ({ plantTypes }) => {
  const topThreePlantTypeNames = ['Monstera', 'Elephant Ear', 'Senecio'];
  const filteredPlantTypes = plantTypes.filter(
    plantType => !topThreePlantTypeNames.includes(plantType.name),
  );
  const topThreePlantTypes = topThreePlantTypeNames.map(plantTypeName =>
    plantTypes.find(p => p.name === plantTypeName),
  );
  const sortedPlantTypeList = topThreePlantTypes.concat(filteredPlantTypes);
  debugger;
  return (
    <>
      {plantTypes.length > 0 && (
        <div className={plantTypeList}>
          {sortedPlantTypeList.map(plantType => (
            <PlantCardLarge key={plantType.name} {...plantType} />
          ))}
        </div>
      )}
    </>
  );
};

export default PlantTypeList;
