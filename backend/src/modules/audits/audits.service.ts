import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateAuditDto } from './dto/create-audit.dto';

import { UpdateAuditDto } from './dto/update-audit.dto';

@Injectable()
export class AuditsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateAuditDto) {
    const audit = await this.prisma.audit.create({
      data: dto,
    });

    const kitchenAudits =
      await this.prisma.audit.findMany({
        where: {
          kitchenId: dto.kitchenId,
        },
      });

    const totalScore = kitchenAudits.reduce(
      (sum, audit) => sum + audit.hygieneScore,
      0,
    );

    const averageScore =
      totalScore / kitchenAudits.length;

    await this.prisma.kitchen.update({
      where: {
        id: dto.kitchenId,
      },

      data: {
        hygieneScore: averageScore,
        trustScore: averageScore,
      },
    });

    return audit;
  }

  findAll() {
    return this.prisma.audit.findMany({
      include: {
        kitchen: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.audit.findUnique({
      where: { id },
    });
  }

  update(id: string, dto: UpdateAuditDto) {
    return this.prisma.audit.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.audit.delete({
      where: { id },
    });
  }
}