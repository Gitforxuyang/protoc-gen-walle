/**
 * 自动生成 请勿修改
 * Fri Jul 31 2020 14:07:59 GMT+0800 (GMT+08:00)
 */

import { Service } from 'egg'
import { main as hello } from '../../proto/hello'

export default class helloService extends Service {
      
          

          
            
            

            public async hello(
            data: hello.IString,
            ): Promise<hello.IString> {
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

          
            
            

            public async ping(
            data: hello.IString,
            ): Promise<hello.IString> {
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
