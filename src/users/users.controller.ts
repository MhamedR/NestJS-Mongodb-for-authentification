import { UsersService } from "./users.service";
import { Post, Body, Controller } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-user.dto";

@Controller('users')
export class UsersController{
    constructor(private readonly usersService:UsersService){}
    
    @Post()
    async create(@Body() createUsersDto:CreateUsersDto){
        await this.usersService.create(createUsersDto);
    }
}