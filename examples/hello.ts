/**
 * build from examples/hello.proto
 * protoc-gen-walle plugin 自动生成 请勿修改
 * Mon Aug 03 2020 11:46:59 GMT+0800 (GMT+08:00)
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

export default class Examples/helloService extends Service {
                
    public async hello(data: String): Promise<String> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'examples/hello',
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
            'examples/hello',
            'HelloService',
            'ping',
            {
                data,
            },
        )
        return result
    } 
}
