import api from './index'
import { AxiosError, AxiosResponse } from 'axios'
import { GameProps,User } from '../Interface'

export const getUser = async (data:any) => {
        try {
            const response: any = (await api.post<AxiosResponse>('/login', data)).data
            const user: User = {
                name: response?.user?.name,
                id: response?.user?.id,
                token: response?.token?.token,
                email: response?.user?.email,
            }
            return user


        } catch (err) {
            const error: AxiosError = err
            console.log(error)
        }
}