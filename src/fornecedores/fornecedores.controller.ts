import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FornecedorDto } from './model/fornecedor.dto';

import { FornecedoresService } from './fornecedores.service';
import { Fornecedor } from './model/fornecedor.schema';

@Controller('fornecedores')
export class FornecedoresController {
    constructor(private fornecedoresService: FornecedoresService) { }
    @Get()
    findAll(): Promise<Fornecedor[]> {
        return this.fornecedoresService.findAll();
    }

    @Post()
    async create(@Body() fornecedorDto: FornecedorDto) {
        return this.fornecedoresService.create(fornecedorDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Fornecedor> {
        return this.fornecedoresService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.fornecedoresService.delete(id);
    }
}
