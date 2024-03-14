import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),
  ],
})
export class AppModule {}
