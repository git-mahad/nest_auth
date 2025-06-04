import { SignupDto } from './dtos/signup.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
export declare class AuthService {
    private UserModel;
    constructor(UserModel: Model<User>);
    signup(signupData: SignupDto): Promise<import("mongoose").Document<unknown, {}, User, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(loginData: LoginDto): Promise<{
        message: string;
        user: {
            name: string;
            email: string;
        };
    }>;
}
