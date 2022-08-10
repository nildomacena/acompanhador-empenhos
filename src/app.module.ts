import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://koine:21041898@cluster0.l0j1jnz.mongodb.net/?retryWrites=true&w=majority'), ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule { 
  constructor(){
    console.log(typeof process.env.DATABASE_URL);
  }
}
