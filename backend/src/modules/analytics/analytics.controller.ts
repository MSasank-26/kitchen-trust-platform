import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';

import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(
    private analyticsService: AnalyticsService,
  ) {}

  @Get('trust')
  getTrustAnalytics() {
    return this.analyticsService.getTrustAnalytics();
  }

  @Get('ai-risk/:kitchenId')
  getKitchenRiskPrediction(
    @Param('kitchenId')
    kitchenId: string,
  ) {
    return this.analyticsService.getKitchenRiskPrediction(
      kitchenId,
    );
  }

  @Get('insight/:kitchenId')
  generateKitchenInsight(
    @Param('kitchenId')
    kitchenId: string,
  ) {
    return this.analyticsService.generateKitchenInsight(
      kitchenId,
    );
  }
}