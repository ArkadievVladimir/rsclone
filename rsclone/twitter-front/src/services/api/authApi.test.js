import { AuthApi } from './authApi';
import { axios } from '../../core/axios';
jest.mock('axios');

describe('AuthApi', () => {
    const data = {
        data: {
            confirmed: false,
            tweets: [],
            _id: '60059a137b63aa3740261fe5',
            email: '123456789@mail.com',
            username: 'John_Doe',
            fullname: 'John Doe',
            createdAt: '2021-01-18T14:24:19.522Z',
            updatedAt: '2021-01-18T14:24:19.522Z',
            __v: 0,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNvbmZpcm1lZCI6ZmFsc2UsInR3ZWV0cyI6W10sIl9pZCI6IjYwMDU5YTEzN2I2M2FhMzc0MDI2MWZlNSIsImVtYWlsIjoiMTIzNDU2Nzg5QG1haWwuY29tIiwidXNlcm5hbWUiOiJKb2huX0RvZSIsImZ1bGxuYW1lIjoiSm9obiBEb2UiLCJjcmVhdGVkQXQiOiIyMDIxLTAxLTE4VDE0OjI0OjE5LjUyMloiLCJ1cGRhdGVkQXQiOiIyMDIxLTAxLTE4VDE0OjI0OjE5LjUyMloiLCJfX3YiOjB9LCJpYXQiOjE2MTEzOTg5MTQsImV4cCI6MTYxMzk5MDkxNH0.Hfgd4NeTB-nabKS5OhMjz8sRQ10gsq3B8aNVOZmwDes'
        }
    };

    test('should recieve user data', async () => {
        axios.post.mockReturnValue(data);
        const res = await AuthApi.signIn({username: 'John_Doe', password: 'qwerty1234'});
        expect(res._id).toEqual(data.data._id);
    });
});
