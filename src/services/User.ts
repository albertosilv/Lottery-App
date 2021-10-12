import api from './index'
import { AxiosError, AxiosResponse } from 'axios'
import { GameProps,User } from '../Interface'

export const getUser = async (data:any) => {
        try {
            console.log(data)
            const response: any = (await api.post<AxiosResponse<User>>('/login', data)).data
            const user: User = {
                name: response.user?.name,
                id: response?.user?.id,
                token: response?.token?.token,
                email: response?.user?.email,
            }
            return user as User


        } catch (err) {
            const error = err as AxiosError
            console.log(error.response?.data)
        }
}