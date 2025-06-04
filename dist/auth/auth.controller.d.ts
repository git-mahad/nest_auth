import { AuthService } from './auth.service';
import { SignupDto } from './dtos/signup.dto';
import { LoginDto } from './dtos/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signupData: SignupDto): Promise<{
        message: string;
        user: {
            name: string;
            email: string;
        };
    }>;
    login(loginData: LoginDto): Promise<{
        message: string;
        user: {
            name: string;
            email: string;
        };
    }>;
}
