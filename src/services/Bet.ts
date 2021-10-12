import { AxiosError, AxiosResponse } from "axios"
import { User,Item } from "../Interface"
import api from "./index"
export const getBets = async (user:User)=> {
    try {
        const config = {
            headers:{
                authorization: `Bearer ${user.token}`
            }
        }
        const response: any[] = (await api.get<AxiosResponse[]>(`/bet?id=${user.id}`,config)).data
        const dataFilter:any[] = response.filter(e=>{
            return e.game!=null
        })
        const data: Item[] = dataFilter.map(e => {
            const data =  new Date(e.created_at.replace(' ','T'))
            return {
                id:e.id,
                numbers:e.numbers,
                data:data,
                type:{
                    color: e.game.color,
                    description: e.game.description,
                    id: e.game.id,
                    'max-number': e.game['max-number'],
                    'min-cart-value': e.game['min-cart-value'],
                    price: e.game.price,
                    range: e.game.range,
                    type: e.game.type,
                    selected: false
                }
            }
        })
        return data
    } catch (err) {
        const error: AxiosError = err as AxiosError
        console.log(error)
    }

}