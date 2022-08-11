import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from 'mongoose';
import { Fornecedor } from "src/fornecedores/model/fornecedor.schema";

export type EmpenhoDocument = Empenho & Document;

@Schema()
export class  Empenho {
    @Prop({ required: true })
    numero: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Fornecedor' })
    owner: Fornecedor;

    @Prop({ required: true })
    fornecedor: string;

    @Prop({ required: true, default: new Date() })
    dataCadastro: Date;

    @Prop({ required: true })
    valor: number;
}

export const EmpenhoSchema = SchemaFactory.createForClass(Empenho);