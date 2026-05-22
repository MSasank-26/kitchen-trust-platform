'use client';

import { useEffect, useState } from 'react';

import { api } from '@/lib/api';

export default function HomePage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    api
      .get('/restaurants')
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-8">
        Restaurants
      </h1>

      <div className="space-y-4">
        {restaurants.map((restaurant: any) => (
          <div
            key={restaurant.id}
            className="border rounded-xl p-5 shadow-sm"
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