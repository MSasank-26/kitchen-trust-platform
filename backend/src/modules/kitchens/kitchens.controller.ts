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

import { KitchensService } from './kitchens.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { Roles } from '../../common/decorators/roles.decorator';

import { RolesGuard } from '../../common/guards/roles.guard';

import { CreateKitchenDto } from './dto/create-kitchen.dto';

import { UpdateKitchenDto } from './dto/update-kitchen.dto';

@Controller('kitchens')
export class KitchensController {
  constructor(
    private kitchensService: KitchensService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPER_ADMIN', 'RESTAURANT_ADMIN')
  @Post()
  create(@Body() dto: CreateKitchenDto) {
    return this.kitchensService.create(dto);
  }

  @Get()
  findAll() {
    return this.kitchensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kitchensService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPER_ADMIN', 'RESTAURANT_ADMIN')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateKitchenDto,
  ) {
    return this.kitchensService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPER_ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kitchensService.remove(id);
  }
}