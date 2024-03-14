// todo.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: any) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  async findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: any) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
