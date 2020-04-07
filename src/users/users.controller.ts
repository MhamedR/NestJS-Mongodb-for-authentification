import { UsersService } from "./users.service";
import { Post, Body, Controller, UseGuards, HttpException, HttpStatus } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-user.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller('users')
export class UsersController{
    constructor(private readonly usersService:UsersService){}
    
   // @UseGuards(JwtAuthGuard)
    @Post('createUser')
    async create(@Body() createUsersDto:CreateUsersDto){
        await this.usersService.create(createUsersDto);
       // throw new HttpException('Forbidden', HttpStatus.FOUND)
    }
}