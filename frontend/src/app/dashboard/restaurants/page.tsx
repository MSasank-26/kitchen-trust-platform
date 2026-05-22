'use client';

import { useEffect, useState } from 'react';

import { api } from '@/lib/api';

type Restaurant = {
  id: string;
  name: string;
  location: string;
  cuisine: string;
};

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] =
    useState<Restaurant[]>([]);

  const [name, setName] = useState('');

  const [location, setLocation] =
    useState('');

  const [cuisine, setCuisine] =
    useState('');

  const fetchRestaurants = async () => {
    const response = await api.get(
      '/restaurants',
    );

    setRestaurants(response.data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const createRestaurant = async () => {
    try {
      await api.post('/restaurants', {
        name,
        location,
        cuisine,
      });

      setName('');
      setLocation('');
      setCuisine('');

      fetchRestaurants();
    } catch (error) {
      console.error(error);

      alert(
        'Failed to create restaurant',
      );
    }
  };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        Restaurants Dashboard
      </h1>

      <div className="border rounded-xl p-6 mb-10 space-y-4">
        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Restaurant Name"
          className="w-full border p-3 rounded"
        />

        <input
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          placeholder="Location"
          className="w-full border p-3 rounded"
        />

        <input
          value={cuisine}
          onChange={(e) =>
            setCuisine(e.target.value)
          }
          placeholder="Cuisine"
          className="w-full border p-3 rounded"
        />

        <button
          onClick={createRestaurant}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Create Restaurant
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="border rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold">
              {restaurant.name}
            </h2>

            <p className="text-gray-600">
              {restaurant.location}
            </p>

            <p className="text-gray-500">
              {restaurant.cuisine}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}