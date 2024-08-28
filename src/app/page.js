'use client';

import { useEffect, useState } from 'react';
import FilterForm from './components/FilterForm';
import api from './utils/axiosConfig';

export default function Home() {
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    async function fetchVehicleTypes() {
      try {
        const response = await api.get('/GetMakesForVehicleType/car?format=json');
        setVehicleTypes(response.data.Results);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    fetchVehicleTypes();
  }, []);

  return <FilterForm vehicleTypes={vehicleTypes} />;
}
