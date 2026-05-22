import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateKitchenDto } from './dto/create-kitchen.dto';

import { UpdateKitchenDto } from './dto/update-kitchen.dto';

@Injectable()
export class KitchensService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateKitchenDto) {
    return this.prisma.kitchen.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.kitchen.findMany({
      include: {
        restaurant: true,
        audits: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.kitchen.findUnique({
      where: { id },
    });
  }

  update(id: string, dto: UpdateKitchenDto) {
    return this.prisma.kitchen.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.kitchen.delete({
      where: { id },
    });
  }
}