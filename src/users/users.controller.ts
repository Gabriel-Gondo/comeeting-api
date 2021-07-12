import { UserService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user';

@Controller('users')
export class UsersController {
    constructor(
        private userService: UserService
    ){
       
    }

    @Get()
    async getAll(): Promise<User[]>{
        return this.userService.getAll();
    }

    @Get(':id')
    async getByID(@Param('id') id:string): Promise<User>{
        return this.userService.getById(id);
    }

    @Post()
    async create(@Body() user:User): Promise<User>{
        return this.userService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() user:User): Promise<User>{
        return this.userService.update(id,user);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        this.userService.delete(id)
    }

}
