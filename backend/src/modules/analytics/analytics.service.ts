import { Injectable } from '@nestjs/common';

import axios from 'axios';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async getTrustAnalytics() {
    const kitchens =
      await this.prisma.kitchen.findMany({
        include: {
          restaurant: true,
        },
      });

    return kitchens.map((kitchen) => ({
      name:
        kitchen.restaurant.name,

      trustScore:
        kitchen.trustScore || 0,
    }));
  }

  async getKitchenRiskPrediction(
    kitchenId: string,
  ) {
    const kitchen =
      await this.prisma.kitchen.findUnique({
        where: { id: kitchenId },
      });

    if (!kitchen) {
      throw new Error(
        'Kitchen not found',
      );
    }

    const response = await axios.post(
      'http://localhost:8000/predict-risk',
      {
        hygieneScore:
          kitchen.hygieneScore,

        trustScore:
          kitchen.trustScore,
      },
    );

    return {
      kitchenId,
      prediction: response.data,
    };
  }
}