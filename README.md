# protoc-gen-walle

protoc-gen-walle是protoc的一个plugin，通过其可以将proto文件转化为ts文件，且生成满足egg ts模式下的service代码。免除了一部分人工翻译的人力

#### 注：此生成工具生成的代码是特定业务代码，其service中的grpc调用方式是公司业务框架的特定调用方式，外部无法使用。 不过整个自动生成代码的思路可以参考，将service的生成代码改成符合自己需求的代码即可

QA：
1. 为什么叫walle? 

源自《机器人总动员》中主人公的名字，意为一个工具机器人