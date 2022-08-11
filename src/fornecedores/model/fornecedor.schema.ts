
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FornecedorDocument = Fornecedor & Document;

@Schema()
export class Fornecedor {

    @Prop({ required: true })
    nome: string;

    @Prop({ required: true })
    cnpj: string;

    @Prop()
    telefone: string;

    @Prop()
    email: string;
}

export const FornecedorSchema = SchemaFactory.createForClass(Fornecedor);