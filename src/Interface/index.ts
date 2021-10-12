import { KeyboardTypeOptions } from 'react-native'
export interface InputProps {
    value: string,
    onChange: Function,
    placeholder: string,
    secureTextEntry: boolean
}
export interface ButtonIconProps {
    iconSize: number,
    color: string,
    text: string,
    press: Function,
    position: boolean
}
export interface Screen {
    navigation: any
}
export interface TGLProps {
    fontSize?: number
}
export interface GameProps {
    id: string,
    type: string,
    description: string,
    range: number,
    price: number,
    "max-number": number,
    color: string,
    "min-cart-value": number,
    selected: boolean,
}
export interface ButtonGameProps {
    id: string,
    type: string,
    color: string,
    selected: boolean,
    click?: any
}
export interface User {
    name: string,
    id: string,
    token: string,
    email: string,
}

export interface Item{
    id:number,
    numbers:string,
    data:Date,
    type:GameProps
}