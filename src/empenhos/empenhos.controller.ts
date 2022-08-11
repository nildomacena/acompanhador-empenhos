import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EmpenhoDto } from './empenho.dto';
import { Empenho } from './empenho.schema';
import { EmpenhosService } from './empenhos.service';

@Controller('empenhos')
export class EmpenhosController {

    constructor(private empenhosService: EmpenhosService) { }
    @Get()
    findAll(): Promise<Empenho[]> {
        return this.empenhosService.findAll();
    }

    @Post()
    async create(@Body() empenhoDto: EmpenhoDto) {
        return this.empenhosService.create(empenhoDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Empenho> {
        return this.empenhosService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.empenhosService.delete(id);
    }
}
