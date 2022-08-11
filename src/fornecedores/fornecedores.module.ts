import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FornecedoresController } from './fornecedores.controller';
import { FornecedoresService } from './fornecedores.service';
import { Fornecedor, FornecedorSchema } from './model/fornecedor.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Fornecedor.name, schema: FornecedorSchema }])],
  controllers: [FornecedoresController],
  providers: [FornecedoresService]
})
export class FornecedoresModule { }
