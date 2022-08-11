import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FornecedorDto } from './model/fornecedor.dto';
import { Fornecedor, FornecedorDocument } from './model/fornecedor.schema';

@Injectable()
export class FornecedoresService {
    constructor(@InjectModel(Fornecedor.name) private fornecedorModel: Model<FornecedorDocument>) { }

    async create(createFornecedorDto: FornecedorDto): Promise<Fornecedor> {
        const createdFornecedor = new this.fornecedorModel(createFornecedorDto);
        return createdFornecedor.save();
    }

    async findAll(): Promise<Fornecedor[]> {
        return this.fornecedorModel.find().exec();
    }


    async findOne(id: string): Promise<Fornecedor> {
        return this.fornecedorModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        const deletedFornecedor = await this.fornecedorModel
            .findByIdAndRemove({ _id: id })
            .exec();
        return deletedFornecedor;
    }
}
