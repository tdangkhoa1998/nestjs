import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('signup')
    signup(@Body() dto: any) {
        console.log(dto);
        return this.authService.signUp();
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}