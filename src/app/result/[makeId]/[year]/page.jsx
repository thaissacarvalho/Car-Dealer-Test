import VehicleList from '../../../components/VehicleList';
import api from '../../../utils/axiosConfig';

async function fetchVehicleModels(makeId, year, vehicletype) {
  let endpoint = `GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;

  if (vehicletype) {
    endpoint = `GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}/vehicletype/${vehicletype}?format=json`;
  }

  try {
    const res = await api.get(endpoint);
    return res.data.Results || [];
  } catch (error) {
    console.error('Failed to fetch vehicle models:', error);
    return [];
  }
}

export default async function ResultPage({ params }) {
  const { makeId, year, vehicletype } = params;
  const vehicleModels = await fetchVehicleModels(makeId, year, vehicletype);

  return (
    <div>
      {vehicleModels.length === 0 ? (
        <div>Error: Failed to fetch vehicle models</div>
      ) : (
        <VehicleList vehicleModels={vehicleModels} />
      )}
    </div>
  );
}