import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmpenhoDto } from './empenho.dto';
import { Empenho, EmpenhoDocument } from './empenho.schema';

@Injectable()
export class EmpenhosService {
    constructor(@InjectModel(Empenho.name) private empenhoModel: Model<EmpenhoDocument>) { }

    async create(createEmpenhoDto: EmpenhoDto): Promise<Empenho> {
        const createdEmpenho = new this.empenhoModel(createEmpenhoDto);
        return createdEmpenho.save();
    }

    async findAll(): Promise<Empenho[]> {
        return this.empenhoModel.find().exec();
    }


    async findOne(id: string): Promise<Empenho> {
        return this.empenhoModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        const deletedEmpenho = await this.empenhoModel
            .findByIdAndRemove({ _id: id })
            .exec();
        return deletedEmpenho;
    }
}
