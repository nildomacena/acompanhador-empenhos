import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Empenho, EmpenhoSchema } from './empenho.schema';
import { EmpenhosService } from './empenhos.service';
import { EmpenhosController } from './empenhos.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Empenho.name, schema: EmpenhoSchema }])],
    controllers: [EmpenhosController],
    providers: [EmpenhosService]
})
export class EmpenhosModule { }
