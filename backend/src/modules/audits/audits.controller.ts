import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuditsService } from './audits.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { Roles } from '../../common/decorators/roles.decorator';

import { RolesGuard } from '../../common/guards/roles.guard';

import { CreateAuditDto } from './dto/create-audit.dto';

import { UpdateAuditDto } from './dto/update-audit.dto';

@Controller('audits')
export class AuditsController {
  constructor(
    private auditsService: AuditsService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPER_ADMIN', 'INSPECTOR')
  @Post()
  create(@Body() dto: CreateAuditDto) {
    return this.auditsService.create(dto);
  }

  @Get()
  findAll() {
    return this.auditsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPER_ADMIN', 'INSPECTOR')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateAuditDto,
  ) {
    return this.auditsService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPER_ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditsService.remove(id);
  }
}