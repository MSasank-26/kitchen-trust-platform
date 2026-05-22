'use client';

import { useEffect, useState } from 'react';

import { api } from '@/lib/api';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type AnalyticsData = {
  name: string;
  trustScore: number;
};

export default function TrustAnalytics() {
  const [data, setData] = useState<
    AnalyticsData[]
  >([]);

  useEffect(() => {
    api
      .get('/analytics/trust')
      .then((res) => setData(res.data))
      .catch((err) =>
        console.error(err),
      );
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">
        Trust Analytics
      </h2>

      <div className="h-[400px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="trustScore" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}