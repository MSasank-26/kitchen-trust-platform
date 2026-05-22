import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateRestaurantDto } from './dto/create-restaurant.dto';

import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateRestaurantDto, ownerId: string) {
    return this.prisma.restaurant.create({
      data: {
        ...dto,
        ownerId,
      },
    });
  }

  findAll() {
    return this.prisma.restaurant.findMany({
      include: {
        owner: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.restaurant.findUnique({
      where: { id },
    });
  }

  update(id: string, dto: UpdateRestaurantDto) {
    return this.prisma.restaurant.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.restaurant.delete({
      where: { id },
    });
  }
}