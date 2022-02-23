import { Injectable, Req, Request } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService { 

    constructor(private prisma: PrismaService) {

    }

    signin() {
        return {
            message: "",
            success: true,
            data: {
                userName: "Dang khoa",
                passWord: 123456
            }
        };
    }

    signUp() {
        return {
            message: "",
            success: true,
            data: {
                userName: "Dang khoa",
                passWord: 123456
            }
        };
    }

}