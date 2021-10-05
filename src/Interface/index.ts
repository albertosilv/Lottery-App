import { KeyboardTypeOptions } from 'react-native'
export interface InputProps{
    value:string,
    onChange:Function,
    placeholder:string,
    secureTextEntry:boolean
}
export interface ButtonIconProps{
    iconSize:number,
    color:string,
    text:string,
    press:Function,
    position:boolean
}
export interface Screen{
    navigation:any
}