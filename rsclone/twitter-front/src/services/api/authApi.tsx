import { axios } from '../../core/axios';
import { LoginFormProps } from '../../pages/Signin/components/LoginModal';
import { RegisterFormProps } from '../../pages/Signin/components/RegisterModal';
import { BACKEND_URL } from '../backendUrl';

interface AuthResponse {
    status: string;
    data: any;
}

export const AuthApi = {
    async verify(hash: string): Promise<AuthResponse> {
        const { data } = await axios.get<AuthResponse>(`${BACKEND_URL}/auth/verify?hash=` + hash);
        return data;
    },
    async signIn(postData: LoginFormProps): Promise<AuthResponse> {
        const { data } = await axios.post<AuthResponse>(`${BACKEND_URL}/auth/login`, { username: postData.email, password: postData.password });
        return data;
    },
    async signUp(postData: RegisterFormProps): Promise<AuthResponse> {
        const { data } = await axios.post<AuthResponse>(`${BACKEND_URL}/auth/register`, { 
            username: postData.username, 
            fullname: postData.fullname, 
            email: postData.email, 
            password: postData.password, 
            password2: postData.password2 
        });
        return data;
    },
    async getMe(): Promise<AuthResponse> {
        const { data } = await axios.get<AuthResponse>(`${BACKEND_URL}/users/me`);
        return data;
    },
    async getuserInfo(userId: string): Promise<AuthResponse> {
        const { data } = await axios.get<AuthResponse>(`${BACKEND_URL}/users/` + userId);
        return data;
    },
}
