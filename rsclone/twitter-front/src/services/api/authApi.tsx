import axios from 'axios'
import { LoginFormProps } from '../../pages/Signin/components/LoginModal'



interface AuthResponse {
    status: string;
    data: any;
}

export const AuthApi = {
    async signIn(postData: LoginFormProps): Promise<AuthResponse> {
        const { data } = await axios.post<AuthResponse>('/auth/login', { username: postData.email, password: postData.password })
        return data
    }
}