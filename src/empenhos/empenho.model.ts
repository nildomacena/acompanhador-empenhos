import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EmpenhoDocument = Empenho & Document;

@Schema()
export class Empenho {
    @Prop()
    numero: string;

    @Prop()
    fornecedor: string;

    @Prop()
    dataCadastro: Date;

    @Prop()
    valor: number;
}

export const EmpenhoSchema = SchemaFactory.createForClass(Empenho);