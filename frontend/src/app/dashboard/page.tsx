'use client';

import { useAuthStore } from '@/store/auth.store';
import TrustAnalytics from '@/components/TrustAnalytics';
import KitchenRiskCard from '@/components/KitchenRiskCard';
export default function DashboardPage() {
  const { user } = useAuthStore();

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-4">
        Welcome Back
      </h1>

      <p className="text-gray-600 mb-10">
        Kitchen Trust Intelligence Dashboard
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg text-gray-500">
            Logged In User
          </h2>

          <p className="text-2xl font-bold mt-2">
            {user?.email}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg text-gray-500">
            Role
          </h2>

          <p className="text-2xl font-bold mt-2">
            {user?.role}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg text-gray-500">
            Platform Status
          </h2>

          <p className="text-2xl font-bold mt-2 text-green-600">
            Active
          </p>
        </div>
        
      </div>

      <div className="mt-10">
        <TrustAnalytics />
          <div className="mt-10">
           <KitchenRiskCard
                kitchenId="18228549-3be0-49ec-9c37-7dda09e2d6b9"
            />
          </div>
      </div>
    </main>
  );
}