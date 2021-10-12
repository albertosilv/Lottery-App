import api from './index'
import { AxiosError, AxiosResponse } from 'axios'
import { GameProps } from '../Interface'
export const getGame = async () => {
    try {
        const response: GameProps[] = (await api.get(`/game`)).data
        const data: GameProps[] = response.map(e => {
            return {
                color: e.color,
                description: e.description,
                id: e.id,
                'max-number': e['max-number'],
                'min-cart-value': e['min-cart-value'],
                price: e.price,
                range: e.range,
                type: e.type,
                selected: false
            }
        })
        return data
    } catch (err) {
        const error: AxiosError = err as AxiosError
        console.log(error)
    }
}