/**
 * 自动生成 请勿修改
 * Mon Aug 03 2020 11:30:19 GMT+0800 (GMT+08:00)
 */

import { Service } from 'egg'
export interface String_Content_D{
    d: string
}
export interface String_Content{
    c: string[]
    d: (String_Content_D|null)
}
export interface String{
    value: {value:string}[]
    v: (Value|null)
    c: String_Content[]
}
export interface Value{
    name: string
    age: string
}

export default class HelloService extends Service {
                
    public async hello(data: String): Promise<String> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'hello',
            'HelloService',
            'hello',
            {
                data,
            },
        )
        return result
    } 

    public async ping(data: String): Promise<String> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'hello',
            'HelloService',
            'ping',
            {
                data,
            },
        )
        return result
    } 
}
