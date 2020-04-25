import { User } from './user.types';

export type LoginResponse = {
    user: User;
    token: JwtToken
}

export type JwtToken = string;
