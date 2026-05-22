import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';

import { AuthModule } from './modules/auth/auth.module';

import { UsersModule } from './modules/users/users.module';

import { RestaurantsModule } from './modules/restaurants/restaurants.module';
import { KitchensModule } from './modules/kitchens/kitchens.module';
import { AuditsModule } from './modules/audits/audits.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';


@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    RestaurantsModule,
    KitchensModule,
    AuditsModule,
    AnalyticsModule,
  ],
})
export class AppModule {}