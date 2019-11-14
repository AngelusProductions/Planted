import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_PLANT_TYPE = gql`
  query getPlantType($id: ID!) {
    plantType(id: $id) {
      name
      featuresWeb
      instructionsWeb
      luxLevelInfo
      waterCycleInfo
      petToxicity
      humidityAdvice
      travelAdvice
      careAdvice
      photoUrl
      luxLevel
      waterLevel
    }
  }
`;

export function getPlantType(plantTypeId) {
  return useQuery(GET_PLANT_TYPE, {
    variables: { id: plantTypeId },
  });
}
