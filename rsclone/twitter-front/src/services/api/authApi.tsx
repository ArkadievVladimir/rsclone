
import { axios } from '../../core/axios'
import { LoginFormProps } from '../../pages/Signin/components/LoginModal'
import { RegisterFormProps } from '../../pages/Signin/components/RegisterModal'



interface AuthResponse {
    status: string;
    data: any;
}

export const AuthApi = {
    async signIn(postData: LoginFormProps): Promise<AuthResponse> {
        const { data } = await axios.post<AuthResponse>('/auth/login', { username: postData.email, password: postData.password })
        return data
    },
    async signUp(postData: RegisterFormProps): Promise<AuthResponse> {
        const { data } = await axios.post<AuthResponse>('/auth/register', { username: postData.username, fullname: postData.fullname, email: postData.email, password: postData.password, password2: postData.password2 })
        return data
    },
    async GetMe(): Promise<AuthResponse> {
        const { data } = await axios.get<AuthResponse>('/users/me')
        return data
    }  
}
