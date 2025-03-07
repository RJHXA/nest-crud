import {
    Body,
    Get,
    Post, 
    Controller,
    HttpCode,
    HttpStatus,
    UseGuards,
} from '@nestjs/common';

import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { RegisterDto } from './dto/register.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post('register')
    async register(@Body() bodyData: RegisterDto) {
        return this.userService.register(bodyData.name, bodyData.email, bodyData.password);
    }

    @Get()
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @ApiResponse({ status: 200, description: 'List of users' })
    async getAllUsers() {
        return this.userService.getAllUsers();
    }
}
