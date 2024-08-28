import { useState, useEffect } from 'react';
import Link from 'next/link';

const FilterForm = ({ vehicleTypes }) => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(selectedType && selectedYear);
  }, [selectedType, selectedYear]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Vehicle Filter
        </h1>

        <div className="mb-6">
          <label
            htmlFor="vehicle-type"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Vehicle Type
          </label>
          <select
            id="vehicle-type"
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Vehicle Type</option>
            {vehicleTypes.map((type) => (
              <option key={type.MakeId} value={type.MakeId}>
                {type.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="model-year"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Model Year
          </label>
          <select
            id="model-year"
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Model Year</option>
            {[...Array(new Date().getFullYear() - 2014).keys()].map((i) => (
              <option key={i + 2015} value={i + 2015}>
                {i + 2015}
              </option>
            ))}
          </select>
        </div>

        <Link href={`/result/${selectedType}/${selectedYear}`} passHref>
          <button
            disabled={!isButtonEnabled}
            className={`w-full p-3 text-white font-semibold rounded-lg focus:outline-none ${!isButtonEnabled ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FilterForm;
