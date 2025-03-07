import {
    Body,
    Get,
    Post, 
    Controller,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto.ts';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService)

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() {email, password}: LoginDto) {
        return await this.authService.login(email, password);
    }
}
