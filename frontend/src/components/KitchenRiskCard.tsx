'use client';

import { useEffect, useState } from 'react';

import { api } from '@/lib/api';

type Props = {
  kitchenId: string;
};

type Prediction = {
  riskLevel: string;
  averageScore: number;
};

export default function KitchenRiskCard({
  kitchenId,
}: Props) {
  const [prediction, setPrediction] =
    useState<Prediction | null>(null);

  useEffect(() => {
    api
      .get(
        `/analytics/ai-risk/${kitchenId}`,
      )
      .then((res) =>
        setPrediction(
          res.data.prediction,
        ),
      )
      .catch((err) =>
        console.error(err),
      );
  }, [kitchenId]);

  if (!prediction) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        Loading AI prediction...
      </div>
    );
  }

  const riskColor =
    prediction.riskLevel === 'LOW RISK'
      ? 'text-green-600'
      : prediction.riskLevel ===
          'MEDIUM RISK'
        ? 'text-yellow-600'
        : 'text-red-600';

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">
        AI Kitchen Risk Analysis
      </h2>

      <p
        className={`text-3xl font-bold ${riskColor}`}
      >
        {prediction.riskLevel}
      </p>

      <p className="mt-4 text-gray-600">
        Average Score:
        <span className="font-semibold ml-2">
          {prediction.averageScore}
        </span>
      </p>
    </div>
  );
}