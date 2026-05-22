import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';

import { AuthModule } from './modules/auth/auth.module';

import { UsersModule } from './modules/users/users.module';

import { RestaurantsModule } from './modules/restaurants/restaurants.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    RestaurantsModule,
  ],
})
export class AppModule {}