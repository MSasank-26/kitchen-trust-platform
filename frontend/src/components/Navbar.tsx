'use client';

import { Bell, User } from 'lucide-react';

import { useAuthStore } from '@/store/auth.store';

export default function Navbar() {
  const { user } = useAuthStore();

  return (
    <header className="bg-white border-b px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">
          Kitchen Trust Platform
        </h1>

        <p className="text-sm text-gray-500">
          AI Trust Intelligence
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            2
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="bg-black text-white rounded-full p-2">
            <User className="w-5 h-5" />
          </div>

          <div>
            <p className="font-semibold">
              {user?.email}
            </p>

            <p className="text-sm text-gray-500">
              {user?.role}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}