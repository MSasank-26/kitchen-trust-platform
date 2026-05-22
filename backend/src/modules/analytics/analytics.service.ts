import { Injectable } from '@nestjs/common';

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
}